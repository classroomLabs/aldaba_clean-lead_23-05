import { Activity } from "./memento";

describe("Memento", () => {
  it("should save and restore the state of the activity", () => {
    const activity = new Activity("Snorkeling on the Red Sea", 5);
    activity.enroll("John");
    activity.enroll("Mary");
    activity.enroll("Peter");
    activity.enroll("Paul");
    activity.enroll("Mark");
    expect(activity.availablePlaces).toBe(0);
    activity.cancel();
    expect(activity.availablePlaces).toBe(1);
  });
});
