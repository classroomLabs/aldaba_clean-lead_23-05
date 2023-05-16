/* eslint-disable max-lines-per-function */
// ! ❌ Bad example not using a strategy

export type LogLevel = "info" | "debug" | "warn" | "error";
export type LogEntry = { level: LogLevel; message: string };

class Logger {
  log(entry: LogEntry): string {
    const message = this.getMessage(entry);
    // ! 😱 new log levels require code changes
    switch (entry.level) {
      case "info":
        console.log(message);
        break;
      case "debug":
        console.debug(message);
        break;
      case "warn":
        console.warn(message);
        break;
      case "error":
        console.error(message);
        break;
      default:
        console.error(message);
    }
    return message;
  }
  private getMessage(entry: LogEntry) {
    // ! 😱 repeated dirty code
    switch (entry.level) {
      case "info":
        return `💁🏼‍♂️: ${entry.message}`;
      case "debug":
        return `🐾: ${entry.message}`;
      case "warn":
        return `⚠️: ${entry.message}`;
      case "error":
        return `💣: ${entry.message} at ${new Date().toISOString()}}`;
      default:
        return `Unknown log level: ${entry.level}`;
    }
  }
}

class App {
  private logger = new Logger();

  public run() {
    this.logger.log({ level: "info", message: "App started!" });
    this.logger.log({ level: "debug", message: "I was here" });
    this.logger.log({ level: "warn", message: "Heads up" });
    this.logger.log({ level: "error", message: "Fatal exception" });
  }
}
