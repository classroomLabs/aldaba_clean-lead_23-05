import { ActivityEnrollment, BookingState, CancellingState, PayingState } from "./state";

describe("State", () => {
  it("should change the state of the activity", () => {
    const activityEnrollment = new ActivityEnrollment();

    activityEnrollment.changeState(new PayingState(100));
    // expect(activityEnrollment.execute()).toBe("payment done : 100");

    activityEnrollment.changeState(new BookingState(5));
    // expect(activityEnrollment.execute()).toBe("booking done : 5");

    activityEnrollment.changeState(new CancellingState("123"));
    // expect(activityEnrollment.execute()).toBe("cancelling done : 123");
  });
});
