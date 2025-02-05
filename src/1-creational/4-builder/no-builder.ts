import { ConsoleWriter, DatabaseWriter, Formatter, JsonFormatter, LogEntry, Writer } from "./builder.dependencies";

// ! ❌ Bad example of not using a builder
class Logger {
  private formatter: Formatter | undefined;
  private writer: Writer | undefined;

  setFormatter(formatter: Formatter): void {
    this.formatter = formatter;
  }
  setWriter(writer: Writer): void {
    if (!this.formatter) {
      throw "Need a formatter";
    }
    if (this.formatter instanceof JsonFormatter && writer instanceof DatabaseWriter) {
      throw "Incompatible formatter for this writer";
    }
    this.writer = writer;
  }

  log(entry: LogEntry) {
    if (!this.writer || !this.formatter) {
      throw new Error("Logger is not configured");
    }
    this.writer.write(this.formatter.format(entry));
  }
}

class Application {
  main() {
    const logger = new Logger();
    // logger.setWriter(new FileWriter()); // ! 😱 throws "Need a formatter"
    logger.setFormatter(new JsonFormatter());
    // logger.setWriter(new DatabaseWriter()); // ! 😱 throws "Incompatible formatter for this writer"
    logger.setWriter(new ConsoleWriter());
    logger.log({ message: "Hello world!" });
    // ! 😱 you must remember to call the methods in the correct order,
    // ! and do it every time you need a new instance
  }
}

class Consumer {
  doWork() {
    const logger = new Logger();
    logger.setFormatter(new JsonFormatter());
    logger.log({ message: "Hello world!" });
  }
}
