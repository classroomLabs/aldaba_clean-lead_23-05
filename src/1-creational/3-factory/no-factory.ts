// ! ❌ Bad example not using a factory
import { ConsoleWriter, DatabaseWriter, FileWriter, Logger, Writer } from "./factory.dependencies";

class Application {
  main() {
    // ! 😱 which implementation to use?
    let writer: Writer;
    // ! 🤢 the logic is exposed and 😱 may have to be repeated in other places
    switch (process.env.LOGGER || "console") {
      case "console":
        writer = new ConsoleWriter();
        break;
      case "file":
        writer = new FileWriter();
        break;
      case "database":
        writer = new DatabaseWriter();
        break;
      default:
        throw new Error("Invalid logger");
    }
    const logger = new Logger(writer);
    logger.log("Hello world!");
  }
}
