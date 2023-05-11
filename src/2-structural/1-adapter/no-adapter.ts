import { ExternalEventData, ExternalEventService } from "./external-event.library";

// ! ❌ Bad example not using adapter
export class Client {
  // ! 🤢 client classes depending on concrete implementations
  private readonly logger: ExternalEventService;
  constructor() {
    // ! 🤢 client classes are coupled to the library
    this.logger = new ExternalEventService();
  }
  public doThings() {
    // ! 🤢 client classes are coupled to the interface
    const event: ExternalEventData = {
      date: new Date(),
      host: "localhost",
      device: "myApp",
      severity: 0,
      extension: ["msg=Hello World"],
    };
    const message = this.logger.createMessage(event);
    return this.logger.writeMessage(message);
  }
}

// main program
const client = new Client();
client.doThings();
