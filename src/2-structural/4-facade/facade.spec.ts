import { EnrolmentFacade } from "./facade";

// describe the enrolment facade
describe("enrolmentFacade", () => {
  it("should enrol the customer", () => {
    const enrolmentSystem = new EnrolmentFacade();
    const actual = enrolmentSystem.enrol("Diving", "John", 2);
    const expected = "Enrolled in Diving with 2 places";
    expect(actual).toEqual(expected);
  });
});
