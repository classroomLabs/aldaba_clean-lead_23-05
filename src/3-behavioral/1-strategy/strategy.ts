// * ✅ Strategy solution

export type LogLevel = "info" | "debug" | "warn" | "error";
export type LogEntry = { level: LogLevel; message: string };

// *  😏 an interface is a contract
interface LogStrategy {
  log(entry: LogEntry): string;
}

// *  😏 different strategies implement the contract

export class InfoLogStrategy implements LogStrategy {
  log(entry: LogEntry) {
    const message = `💁🏼‍♂️: ${entry.message}`;
    console.log(message);
    return message;
  }
}

export class DebugLogStrategy implements LogStrategy {
  log(entry: LogEntry) {
    const message = `🐾: ${entry.message}`;
    console.debug(message);
    return message;
  }
}

export class WarnLogStrategy implements LogStrategy {
  log(entry: LogEntry) {
    const message = `⚠️: ${entry.message}`;
    console.warn(message);
    return message;
  }
}

export class ErrorLogStrategy implements LogStrategy {
  log(entry: LogEntry) {
    const message = `💣: ${entry.message} at ${new Date().toISOString()}}`;
    console.error(message);
    return message;
  }
}

export class Logger implements LogStrategy {
  // *  😏 a map of strategies (implicit factory)
  static strategies = new Map<LogLevel, LogStrategy>([
    ["info", new InfoLogStrategy()],
    ["warn", new WarnLogStrategy()],
    ["error", new ErrorLogStrategy()],
  ]);

  log(entry: LogEntry) {
    const strategy = Logger.strategies.get(entry.level);
    if (strategy) {
      return strategy.log(entry);
    } else {
      const message = `Unknown log level: ${entry.level}`;
      console.warn(message);
      return message;
    }
  }
}

class App {
  private logger = new Logger();

  public run() {
    this.logger.log({ level: "info", message: "App started!" });
    // *  😏 change the strategy map at runtime
    Logger.strategies.set("debug", new DebugLogStrategy());
    this.logger.log({ level: "debug", message: "I was here" });
    this.logger.log({ level: "warn", message: "Heads up" });
    this.logger.log({ level: "error", message: "Fatal exception" });
  }
}
