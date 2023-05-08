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

export class Logger {
  constructor(private writer: Writer) {}

  log(message: string) {
    this.writer.write(message);
  }
}
