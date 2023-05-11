// * ✅ Factory solution
import {
  ConsoleWriter,
  DatabaseWriter,
  FileWriter,
  Logger,
  Writer,
} from "../../../private/1-creational/3-factory/factory.dependencies";

const loggersMap = [
  {
    name: "console",
    instance: new ConsoleWriter(),
  },
  {
    name: "file",
    instance: new FileWriter(),
  },
  {
    name: "database",
    instance: new DatabaseWriter(),
  },
];

// * 😏 factory method encapsulates the logic to create the right instance
export function createWriter(): Writer {
  const result = loggersMap.find((logger) => logger.name === process.env.LOGGER);
  return result?.instance || new ConsoleWriter();
}

class Application {
  main() {
    // * 😏 consumer does not need to know the logic
    const writer = createWriter();
    const logger = new Logger(writer);
    logger.log("Hello world!");
  }
}
