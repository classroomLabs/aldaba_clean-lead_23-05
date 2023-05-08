import { createWriter } from "./factory";
import { ConsoleWriter, FileWriter } from "./factory.dependencies";

describe("create logger writer factory", () => {
  test("should create a console writer as a default", () => {
    const writer = createWriter();
    expect(writer).toBeInstanceOf(ConsoleWriter);
  });

  test("should create a file writer when env is file", () => {
    process.env.LOGGER = "file";
    const writer = createWriter();
    expect(writer).toBeInstanceOf(FileWriter);
  });
});
