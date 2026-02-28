import {
  createNarrative,
  validateNarrative,
  generateChapters,
  getArcPlan,
  ACT_GUIDELINES,
} from "../src/narrative";

describe("ACT_GUIDELINES", () => {
  it("should have all 4 acts", () => {
    expect(Object.keys(ACT_GUIDELINES)).toEqual(["ki", "sho", "ten", "ketsu"]);
  });

  it("should have purpose and timing for each act", () => {
    for (const act of Object.values(ACT_GUIDELINES)) {
      expect(act.purpose).toBeTruthy();
      expect(act.timing).toBeTruthy();
    }
  });
});

describe("createNarrative", () => {
  it("should create a 4-act narrative structure", () => {
    const narrative = createNarrative({
      video_id: "v1",
      arc: "climb_from_chaos",
      total_duration_seconds: 600,
      has_rival: true,
      has_confession: true,
    });

    expect(narrative.acts).toHaveLength(4);
    expect(narrative.acts[0].act).toBe("ki");
    expect(narrative.acts[3].act).toBe("ketsu");
    expect(narrative.has_rival).toBe(true);
  });

  it("should set ki act to first 10 seconds", () => {
    const narrative = createNarrative({
      video_id: "v1",
      arc: "rival_wars",
      total_duration_seconds: 600,
      has_rival: false,
      has_confession: false,
    });

    expect(narrative.acts[0].start_seconds).toBe(0);
    expect(narrative.acts[0].end_seconds).toBe(10);
  });
});

describe("validateNarrative", () => {
  it("should validate a correct narrative", () => {
    const narrative = createNarrative({
      video_id: "v1",
      arc: "climb_from_chaos",
      total_duration_seconds: 600,
      has_rival: false,
      has_confession: false,
    });

    const result = validateNarrative(narrative);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("should catch wrong act order", () => {
    const narrative = createNarrative({
      video_id: "v1",
      arc: "climb_from_chaos",
      total_duration_seconds: 600,
      has_rival: false,
      has_confession: false,
    });

    // Swap acts
    const temp = narrative.acts[1];
    narrative.acts[1] = narrative.acts[2];
    narrative.acts[2] = temp;

    const result = validateNarrative(narrative);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});

describe("generateChapters", () => {
  it("should generate YouTube-format chapter timestamps", () => {
    const narrative = createNarrative({
      video_id: "v1",
      arc: "climb_from_chaos",
      total_duration_seconds: 600,
      has_rival: false,
      has_confession: false,
    });

    const chapters = generateChapters(narrative);
    expect(chapters).toContain("0:00 Hook");
    expect(chapters.split("\n")).toHaveLength(4);
  });
});

describe("getArcPlan", () => {
  it("should return plan for climb_from_chaos", () => {
    const plan = getArcPlan("climb_from_chaos");
    expect(plan.video_count).toBe(12);
    expect(plan.key_beats).toHaveLength(4);
  });

  it("should return plan for each arc type", () => {
    const arcs = [
      "climb_from_chaos",
      "rival_wars",
      "redemption_arc",
      "authority_established",
    ] as const;

    for (const arc of arcs) {
      const plan = getArcPlan(arc);
      expect(plan.arc).toBe(arc);
      expect(plan.description).toBeTruthy();
    }
  });
});
