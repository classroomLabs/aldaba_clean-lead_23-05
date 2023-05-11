import { CommonEventAdapter } from "./adapter";
import { LogEntry } from "./logger.application";

describe("CommonEventAdapter", () => {
  it("should be defined", () => {
    expect(CommonEventAdapter).toBeDefined();
  });
  it("should accept a LogEntry and return the correct CommonEvent string", () => {
    const adapter = new CommonEventAdapter();
    const entry: LogEntry = {
      category: "info",
      message: "Hello World",
      timestamp: new Date(2025, 4, 26, 23, 18, 0),
    };
    const actual = adapter.log(entry);
    const expected = "5/26/2025 11:18:00 PM localhost\nCEF:0|myApp|0|msg=Hello World";
    expect(actual).toEqual(expected);
  });
});
