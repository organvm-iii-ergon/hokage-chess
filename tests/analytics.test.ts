import {
  calculateCTR,
  assessCTR,
  assessRetention,
  generateWeeklyScorecard,
  evaluatePhaseGate,
  detectRedFlags,
} from "../src/analytics";
import type { VideoMetrics, WeeklyScorecard } from "../src/analytics";

function makeMetrics(overrides: Partial<VideoMetrics> = {}): VideoMetrics {
  return {
    video_id: "v1",
    title: "Test Video",
    published_at: new Date(),
    impressions: 1000,
    clicks: 60,
    views: 50,
    retention_30s: 55,
    avg_view_duration_seconds: 180,
    likes: 10,
    comments: 5,
    subscribers_gained: 3,
    ...overrides,
  };
}

describe("calculateCTR", () => {
  it("should calculate CTR percentage", () => {
    expect(calculateCTR(1000, 60)).toBe(6);
  });

  it("should return 0 for zero impressions", () => {
    expect(calculateCTR(0, 10)).toBe(0);
  });
});

describe("assessCTR", () => {
  it("should assess healthy CTR", () => {
    expect(assessCTR(7)).toBe("healthy");
  });

  it("should assess watch CTR", () => {
    expect(assessCTR(4)).toBe("watch");
  });

  it("should assess critical CTR", () => {
    expect(assessCTR(2)).toBe("critical");
  });
});

describe("assessRetention", () => {
  it("should assess healthy retention", () => {
    expect(assessRetention(55)).toBe("healthy");
  });

  it("should assess watch retention", () => {
    expect(assessRetention(45)).toBe("watch");
  });

  it("should assess critical retention", () => {
    expect(assessRetention(30)).toBe("critical");
  });
});

describe("generateWeeklyScorecard", () => {
  it("should generate scorecard from metrics", () => {
    const metrics = [
      makeMetrics({ video_id: "v1", title: "Best", views: 200 }),
      makeMetrics({ video_id: "v2", title: "Worst", views: 50 }),
    ];

    const scorecard = generateWeeklyScorecard(metrics, new Date());
    expect(scorecard.total_views).toBe(250);
    expect(scorecard.videos_published).toBe(2);
    expect(scorecard.best_video).toBe("Best");
    expect(scorecard.worst_video).toBe("Worst");
  });

  it("should handle empty metrics", () => {
    const scorecard = generateWeeklyScorecard([], new Date());
    expect(scorecard.total_views).toBe(0);
    expect(scorecard.status).toBe("needs_fix");
    expect(scorecard.best_video).toBeNull();
  });

  it("should mark on_track when all targets met", () => {
    const metrics = [
      makeMetrics({
        impressions: 1000,
        clicks: 70,
        retention_30s: 60,
        subscribers_gained: 15,
      }),
    ];

    const scorecard = generateWeeklyScorecard(metrics, new Date(), 10);
    expect(scorecard.status).toBe("on_track");
  });
});

describe("evaluatePhaseGate", () => {
  it("should pass gate when most criteria met", () => {
    const result = evaluatePhaseGate("Q1", [
      { label: "Subscribers", target: 250, actual: 300 },
      { label: "CTR", target: 5, actual: 6 },
      { label: "Retention", target: 50, actual: 55 },
    ]);

    expect(result.verdict).toBe("go");
    expect(result.criteria.every((c) => c.passed)).toBe(true);
  });

  it("should fail gate when few criteria met", () => {
    const result = evaluatePhaseGate("Q1", [
      { label: "Subscribers", target: 250, actual: 50 },
      { label: "CTR", target: 5, actual: 2 },
      { label: "Retention", target: 50, actual: 30 },
    ]);

    expect(result.verdict).toBe("pause_and_audit");
  });
});

describe("detectRedFlags", () => {
  it("should detect low CTR for 2+ weeks", () => {
    const scorecards: WeeklyScorecard[] = [
      {
        week_start: new Date(),
        total_views: 100,
        avg_ctr: 2,
        avg_retention_30s: 50,
        subscribers_gained: 5,
        videos_published: 3,
        best_video: "A",
        worst_video: "B",
        status: "needs_fix",
      },
      {
        week_start: new Date(),
        total_views: 80,
        avg_ctr: 2.5,
        avg_retention_30s: 50,
        subscribers_gained: 3,
        videos_published: 3,
        best_video: "C",
        worst_video: "D",
        status: "needs_fix",
      },
    ];

    const flags = detectRedFlags(scorecards);
    expect(flags.length).toBeGreaterThan(0);
    expect(flags[0].flag).toContain("CTR below 3%");
  });

  it("should detect low retention", () => {
    const scorecards: WeeklyScorecard[] = [
      {
        week_start: new Date(),
        total_views: 100,
        avg_ctr: 6,
        avg_retention_30s: 35,
        subscribers_gained: 5,
        videos_published: 3,
        best_video: "A",
        worst_video: "B",
        status: "watch",
      },
    ];

    const flags = detectRedFlags(scorecards);
    expect(flags.some((f) => f.flag.includes("Retention"))).toBe(true);
  });

  it("should return empty for healthy metrics", () => {
    const scorecards: WeeklyScorecard[] = [
      {
        week_start: new Date(),
        total_views: 500,
        avg_ctr: 7,
        avg_retention_30s: 55,
        subscribers_gained: 10,
        videos_published: 3,
        best_video: "A",
        worst_video: "B",
        status: "on_track",
      },
    ];

    expect(detectRedFlags(scorecards)).toHaveLength(0);
  });
});
