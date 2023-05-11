import { ExternalEventData, ExternalEventService } from "./external-event.library";

// * ✅ Adapter solution
// * Define your desired Interface (or use an existing one)

export type LogCategory = "info" | "error" | "debug";
export type LogEntry = {
  category: LogCategory;
  message: string;
  timestamp: Date;
};
export interface Logger {
  log(entry: LogEntry): string;
}

// * make an adpater implementing the desired interface
export class CommonEventAdapter implements Logger {
  // * 😏 The adapted class is wrapped in a private property
  private commonEventService: ExternalEventService = new ExternalEventService();
  // * 😏 The rest of the world only sees the desired interface
  log(entry: LogEntry): string {
    // * 😏 knowledge of the proprietary workflow is encapsulated in the adapter
    const commonEvent = this.adaptLogEntryToExternalEvent(entry);
    const commonEventMessage = this.commonEventService.createMessage(commonEvent);
    // Todo: change the writer or make it configurable
    return this.commonEventService.writeMessage(commonEventMessage);
  }
  // * 😏 all the ugly stuff is hidden in the adapter
  private adaptLogEntryToExternalEvent(entry: LogEntry): ExternalEventData {
    return {
      date: entry.timestamp,
      host: "localhost",
      device: "myApp",
      severity: entry.category === "info" ? 0 : 1,
      extension: [`msg=${entry.message}`],
    };
  }
}

export class Client {
  // * 😏 client classes are decoupled from the concrete implementation
  private readonly logger: Logger;
  constructor() {
    // * 😏 Could come from a factory
    this.logger = new CommonEventAdapter();
  }
  public doThings() {
    // * 😏 client classes are decoupled from the interface
    this.logger.log({
      category: "info",
      message: "Hello World",
      timestamp: new Date(),
    });
  }
}

const client = new Client();
client.doThings();
