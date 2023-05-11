// * ✅ Factory solution

import { ConsoleWriter, DatabaseWriter, FileWriter, Logger, Writer } from "./factory.dependencies";

const writersCatalog = [
  {
    id: "console",
    instance: new ConsoleWriter(),
  },
  {
    id: "file",
    instance: new FileWriter(),
  },
  {
    id: "database",
    instance: new DatabaseWriter(),
  },
];

class WriterFactory {
  // * 😏 factory method encapsulates the logic to create the right instance
  static createWriter(): Writer {
    const writer = writersCatalog.find((w) => w.id === process.env.WRITER);
    return writer?.instance || new ConsoleWriter();
  }
}

class Application {
  main() {
    // * 😏 consumer does not need to know the logic
    const writer = WriterFactory.createWriter();
    const logger = new Logger(writer);
    logger.log("Hello world!");
  }
}
