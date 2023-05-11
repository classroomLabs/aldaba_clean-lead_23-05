export type ExternalEventData = {
  date: Date;
  host: string;
  device: string;
  severity: number;
  extension: string[];
};

// ToDo: 🤢 an external library with proprietary format
export class ExternalEventService {
  public createMessage(event: ExternalEventData): string[] {
    const { date, host, device, severity, extension } = event;
    const timestamp = `${date.toLocaleDateString("en-us")} ${date.toLocaleTimeString("en-us")}`;
    const prefix = `${timestamp} ${host}`;
    const header = `CEF:0|${device}|${severity}|${extension.join(" ")}`;
    const eventMessage: string[] = [];
    eventMessage.push(prefix);
    eventMessage.push(header);
    return eventMessage;
  }
  public writeMessage(message: string[]): string {
    const eventMessage = message.join("\n");
    console.log(eventMessage);
    return eventMessage;
  }
}
