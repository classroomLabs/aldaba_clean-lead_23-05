export interface LogEntry {
  message: string;
}

export interface Formatter {
  format(entry: LogEntry): string;
}

export class SimpleFormatter implements Formatter {
  format(entry: LogEntry) {
    return `${new Date().toISOString()} - ${entry.message}`;
  }
}
export class JsonFormatter implements Formatter {
  format(entry: LogEntry) {
    return JSON.stringify({ date: new Date(), ...entry });
  }
}

export interface Writer {
  write(message: string): void;
}
export class ConsoleWriter implements Writer {
  write(message: string) {
    console.log(message);
  }
}
export class FileWriter implements Writer {
  write(message: string) {
    console.log("Appending to a file", message);
  }
}
export class DatabaseWriter implements Writer {
  write(message: string) {
    console.log("Inserting on a database", message);
  }
}
