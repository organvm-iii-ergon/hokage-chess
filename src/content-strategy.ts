/**
 * Content Strategy Engine for HokageChess.
 * Title formulas, thumbnail scoring, and video planning.
 */

export type VideoFormat = "game" | "puzzle" | "training" | "analysis" | "short";

export interface VideoIdea {
  id: string;
  title: string;
  format: VideoFormat;
  has_rival: boolean;
  has_twist: boolean;
  is_unique: boolean;
  will_engage: boolean;
  created_at: Date;
}

export interface ThumbnailScore {
  face_visible: boolean;
  emotion_clear: boolean;
  text_readable: boolean;
  high_contrast: boolean;
  score: number;
  max_score: number;
}

export interface UploadChecklist {
  thumbnail_pass: boolean;
  title_pass: boolean;
  hook_pass: boolean;
  description_pass: boolean;
  chapters_added: boolean;
  affiliate_links: boolean;
  ready: boolean;
}

/**
 * Apply the HokageChess title formula: [EMOTION] + [STAKES] + [CONTEXT]
 * Returns a score 0-3 for how well the title follows the formula.
 */
export function scoreTitleFormula(title: string): {
  score: number;
  has_emotion: boolean;
  has_stakes: boolean;
  length_ok: boolean;
  feedback: string[];
} {
  const feedback: string[] = [];

  const emotionPatterns =
    /\b(finally|almost|never|worst|best|insane|crazy|destroyed|crushed|shocked|blundered|risked|impossible|unbelievable)\b/i;
  const stakesPatterns =
    /\b(beat|lost|win|rating|elo|1[0-9]{3}|grandmaster|gm|im|titled|championship|tournament|rival)\b/i;

  const has_emotion = emotionPatterns.test(title);
  const has_stakes = stakesPatterns.test(title);
  const length_ok = title.length <= 60;

  let score = 0;
  if (has_emotion) score++;
  if (has_stakes) score++;
  if (length_ok) score++;

  if (!has_emotion) feedback.push("Add emotional hook (e.g., 'finally', 'almost', 'insane')");
  if (!has_stakes) feedback.push("Add stakes (e.g., rating number, 'beat', 'lost')");
  if (!length_ok) feedback.push(`Title is ${title.length} chars — trim to 60 or fewer`);

  // Check for anti-patterns
  if (/^(episode|ep\.?\s*\d|road to.*\|)/i.test(title)) {
    score = Math.max(0, score - 1);
    feedback.push("Remove episode numbering from title start");
  }

  return { score, has_emotion, has_stakes, length_ok, feedback };
}

/**
 * Score a thumbnail against the HokageChess checklist.
 */
export function scoreThumbnail(criteria: {
  face_visible: boolean;
  emotion_clear: boolean;
  text_readable: boolean;
  high_contrast: boolean;
}): ThumbnailScore {
  let score = 0;
  if (criteria.face_visible) score++;
  if (criteria.emotion_clear) score++;
  if (criteria.text_readable) score++;
  if (criteria.high_contrast) score++;

  return { ...criteria, score, max_score: 4 };
}

/**
 * Evaluate a video idea using the decision tree.
 * Score 4/4 = MUST MAKE, 3/4 = MAKE IT, 2/4 = REWORK, <2 = SKIP
 */
export function evaluateIdea(idea: VideoIdea): {
  score: number;
  verdict: "must_make" | "make_it" | "rework" | "skip";
} {
  let score = 0;
  if (idea.has_rival || idea.has_twist) score++; // Will struggle/lose
  if (idea.has_twist) score++;
  if (idea.is_unique) score++;
  if (idea.will_engage) score++;

  const verdict =
    score >= 4
      ? "must_make"
      : score === 3
        ? "make_it"
        : score === 2
          ? "rework"
          : "skip";

  return { score, verdict };
}

/**
 * Generate an upload checklist for a video.
 */
export function createUploadChecklist(params: {
  thumbnail: ThumbnailScore;
  title_score: number;
  hook_within_30s: boolean;
  description_optimized: boolean;
  chapters_added: boolean;
  affiliate_links: boolean;
}): UploadChecklist {
  const thumbnail_pass = params.thumbnail.score >= 3;
  const title_pass = params.title_score >= 2;
  const hook_pass = params.hook_within_30s;
  const description_pass = params.description_optimized;

  return {
    thumbnail_pass,
    title_pass,
    hook_pass,
    description_pass,
    chapters_added: params.chapters_added,
    affiliate_links: params.affiliate_links,
    ready: thumbnail_pass && title_pass && hook_pass && description_pass,
  };
}

/**
 * Plan a week of content (3 long-form + 3 shorts).
 */
export function planWeek(
  ideas: VideoIdea[],
  week_start: Date
): { long_form: VideoIdea[]; shorts: VideoIdea[] } {
  const scored = ideas
    .map((idea) => ({ idea, ...evaluateIdea(idea) }))
    .filter((e) => e.verdict !== "skip")
    .sort((a, b) => b.score - a.score);

  const long_form = scored
    .filter((e) => e.idea.format !== "short")
    .slice(0, 3)
    .map((e) => e.idea);

  const shorts = scored
    .filter((e) => e.idea.format === "short")
    .slice(0, 3)
    .map((e) => e.idea);

  return { long_form, shorts };
}
