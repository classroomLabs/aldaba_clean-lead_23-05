// * ✅ Builder solution

import {
  ConsoleWriter,
  DatabaseWriter,
  FileWriter,
  Formatter,
  JsonFormatter,
  LogEntry,
  SimpleFormatter,
  Writer,
} from "./builder.dependencies";

// *  😏 no need to change the legacy code, just don't call it directly
export class Logger {
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

// * The builder wrapper
export class LoggerBuilder {
  // * 😏 ensures that you will not need to know too much about the logger
  public static build(formatter: Formatter, writer: Writer): Logger {
    if (formatter instanceof JsonFormatter && writer instanceof DatabaseWriter) {
      // * 😏 detects incompatibility before the logger is created
      throw "Incompatible formatter";
    }
    const logger = new Logger();
    // * 😏 ensures correct order
    logger.setFormatter(formatter);
    logger.setWriter(writer);
    return logger;
  }
}

// * ✅ ✅ Builder Director solution
// * 😏 Director is an abstraction on top of the Builder
// * gives a Catalog without knowing the internals
export class LoggerDirector {
  public static buildADefaultLogger(): Logger {
    return LoggerBuilder.build(new SimpleFormatter(), new FileWriter());
  }
  public static buildAFancyLogger(): Logger {
    return LoggerBuilder.build(new JsonFormatter(), new ConsoleWriter());
  }
}

class Application {
  main() {
    // * 😏 ask the director to get the logger you want from its catalog
    const logger = LoggerDirector.buildAFancyLogger();
    // * use it and forget about inconsistencies
    logger.log({ message: "Hello world!" });
  }
}
