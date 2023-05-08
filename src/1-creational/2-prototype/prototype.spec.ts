import { Activity } from "./prototype";

describe("Activity", () => {
  it("should create a new activity edition with a new date", () => {
    const activity = new Activity("Diving", true, 100, new Date(2025, 2, 7));
    const activity2 = activity.cloneEdition(new Date(2026, 1, 8));
    expect(activity2.title).toBe("Diving");
    expect(activity2.allowsChildren).toBe(true);
    expect(activity2.price).toBe(100);
    expect(activity2.date).not.toEqual(activity.date);
  });
});
