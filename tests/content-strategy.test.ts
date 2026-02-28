import {
  scoreTitleFormula,
  scoreThumbnail,
  evaluateIdea,
  createUploadChecklist,
  planWeek,
} from "../src/content-strategy";
import type { VideoIdea, ThumbnailScore } from "../src/content-strategy";

describe("scoreTitleFormula", () => {
  it("should score a perfect title as 3", () => {
    const result = scoreTitleFormula("I FINALLY Beat the 1500 Sicilian");
    expect(result.score).toBe(3);
    expect(result.has_emotion).toBe(true);
    expect(result.has_stakes).toBe(true);
    expect(result.length_ok).toBe(true);
    expect(result.feedback).toHaveLength(0);
  });

  it("should penalize missing emotion", () => {
    const result = scoreTitleFormula("I Beat the 1500");
    expect(result.has_emotion).toBe(false);
    expect(result.feedback).toContainEqual(
      expect.stringContaining("emotional hook")
    );
  });

  it("should penalize too-long titles", () => {
    const result = scoreTitleFormula(
      "I Finally Almost Beat the Grandmaster in the Championship Tournament After Training for Months"
    );
    expect(result.length_ok).toBe(false);
  });

  it("should penalize episode numbering pattern", () => {
    const result = scoreTitleFormula("Episode 13: Road to 1500");
    expect(result.score).toBeLessThan(3);
    expect(result.feedback).toContainEqual(
      expect.stringContaining("episode numbering")
    );
  });
});

describe("scoreThumbnail", () => {
  it("should score 4/4 for perfect thumbnail", () => {
    const result = scoreThumbnail({
      face_visible: true,
      emotion_clear: true,
      text_readable: true,
      high_contrast: true,
    });
    expect(result.score).toBe(4);
    expect(result.max_score).toBe(4);
  });

  it("should score 0/4 for empty thumbnail", () => {
    const result = scoreThumbnail({
      face_visible: false,
      emotion_clear: false,
      text_readable: false,
      high_contrast: false,
    });
    expect(result.score).toBe(0);
  });
});

describe("evaluateIdea", () => {
  it("should rate a strong idea as must_make", () => {
    const idea: VideoIdea = {
      id: "v1",
      title: "Test",
      format: "game",
      has_rival: true,
      has_twist: true,
      is_unique: true,
      will_engage: true,
      created_at: new Date(),
    };
    const result = evaluateIdea(idea);
    expect(result.verdict).toBe("must_make");
  });

  it("should rate a weak idea as skip", () => {
    const idea: VideoIdea = {
      id: "v2",
      title: "Generic",
      format: "game",
      has_rival: false,
      has_twist: false,
      is_unique: false,
      will_engage: false,
      created_at: new Date(),
    };
    const result = evaluateIdea(idea);
    expect(result.verdict).toBe("skip");
  });
});

describe("createUploadChecklist", () => {
  it("should mark ready when all criteria pass", () => {
    const thumb: ThumbnailScore = {
      face_visible: true,
      emotion_clear: true,
      text_readable: true,
      high_contrast: true,
      score: 4,
      max_score: 4,
    };

    const checklist = createUploadChecklist({
      thumbnail: thumb,
      title_score: 3,
      hook_within_30s: true,
      description_optimized: true,
      chapters_added: true,
      affiliate_links: true,
    });

    expect(checklist.ready).toBe(true);
  });

  it("should mark not ready when thumbnail fails", () => {
    const thumb: ThumbnailScore = {
      face_visible: false,
      emotion_clear: false,
      text_readable: true,
      high_contrast: true,
      score: 2,
      max_score: 4,
    };

    const checklist = createUploadChecklist({
      thumbnail: thumb,
      title_score: 3,
      hook_within_30s: true,
      description_optimized: true,
      chapters_added: true,
      affiliate_links: true,
    });

    expect(checklist.ready).toBe(false);
    expect(checklist.thumbnail_pass).toBe(false);
  });
});

describe("planWeek", () => {
  it("should select best ideas for long-form and shorts", () => {
    const ideas: VideoIdea[] = [
      {
        id: "1",
        title: "Strong Game",
        format: "game",
        has_rival: true,
        has_twist: true,
        is_unique: true,
        will_engage: true,
        created_at: new Date(),
      },
      {
        id: "2",
        title: "Short Clip",
        format: "short",
        has_rival: false,
        has_twist: true,
        is_unique: true,
        will_engage: true,
        created_at: new Date(),
      },
      {
        id: "3",
        title: "Skip This",
        format: "game",
        has_rival: false,
        has_twist: false,
        is_unique: false,
        will_engage: false,
        created_at: new Date(),
      },
    ];

    const plan = planWeek(ideas, new Date());
    expect(plan.long_form).toHaveLength(1);
    expect(plan.shorts).toHaveLength(1);
    expect(plan.long_form[0].id).toBe("1");
  });
});
