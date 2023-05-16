/* eslint-disable max-lines-per-function */
import { DebugLogStrategy, LogEntry, Logger } from "./strategy";

describe("The Logger service", () => {
  it("should log info", () => {
    const logger = new Logger();
    const entry: LogEntry = { level: "info", message: "App started!" };
    const result = logger.log(entry);
    expect(result).toBe("💁🏼‍♂️: App started!");
  });
  it("should not log debug ", () => {
    const logger = new Logger();
    const entry: LogEntry = { level: "debug", message: "I was here" };
    const result = logger.log(entry);
    expect(result).toBe("Unknown log level: debug");
  });
  it("should log debug after adding a new strategy", () => {
    Logger.strategies.set("debug", new DebugLogStrategy());
    const logger = new Logger();
    const entry: LogEntry = { level: "debug", message: "I was here" };
    const result = logger.log(entry);
    expect(result).toBe("🐾: I was here");
  });
});
