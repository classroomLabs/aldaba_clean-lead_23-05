import { LoggerDirector } from "./builder";
import { ConsoleWriter, FileWriter, JsonFormatter, SimpleFormatter } from "./builder.dependencies";

describe("logger director", () => {
  test("should create a default logger", () => {
    const logger = LoggerDirector.buildADefaultLogger();
    expect(logger["formatter"]).toBeInstanceOf(SimpleFormatter);
    expect(logger["writer"]).toBeInstanceOf(FileWriter);
  });
  test("should create a fancy logger", () => {
    const logger = LoggerDirector.buildAFancyLogger();
    expect(logger["formatter"]).toBeInstanceOf(JsonFormatter);
    expect(logger["writer"]).toBeInstanceOf(ConsoleWriter);
  });
});
