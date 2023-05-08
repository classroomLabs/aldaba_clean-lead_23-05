import { Logger } from "./singleton";
// import { Logger } from "./no-singleton";
describe("The Logger class", () => {
  it("should be the same instance", () => {
    const logger = new Logger();
    const logger2 = new Logger();
    expect(logger).toBe(logger2);
  });

  it("should store the same entries", () => {
    const logger = new Logger();
    logger.log("Hello world!");
    const logger2 = new Logger();
    expect(logger2.entries).toEqual(["Hello world!"]);
  });
});
