import { EnrolmentDecorator } from "./decorator";
import { Enrolment } from "./no-decorator";

describe("enrolmentDecorator", () => {
  it("should return the enrolment with the course name", () => {
    const enrolment = new Enrolment();
    const actual = enrolment.enrol("Diving", "John", 2);
    const expected = "Enrolled John in Diving with 2 places";
    expect(actual).toEqual(expected);
  });
  it("should cancel the enrolment using the decorator", () => {
    const enrolmentDecorator = new EnrolmentDecorator();
    const actual = enrolmentDecorator.cancel("Diving", "John");
    const expected = "Cancelled John in Diving";
    expect(actual).toEqual(expected);
  });
});
