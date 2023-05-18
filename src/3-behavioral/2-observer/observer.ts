// * ✅ Observer solution

// * 😏 the observer contract is a function used as a listener or callback
type Observer = (data: object) => void;

// * 😏 the observable contract is a set of methods to subscribe, unsubscribe and publish events
interface Observable {
  subscribe(eventName: string, observer: Observer): void;
  unsubscribe(eventName: string, observer: Observer): void;
  publish(eventName: string, eventArgs: object): void;
}

class Logger {
  log(category: string, data: string): void {
    if (category === "err") console.error(data);
    else console.log(data);
  }
}

export class EventBus implements Observable {
  private subscriptions: Map<string, Observer[]> = new Map();

  subscribe(eventName: string, observer: Observer): void {
    let eventObservers = this.subscriptions.get(eventName);
    if (!eventObservers) {
      eventObservers = [];
      this.subscriptions.set(eventName, eventObservers);
    }
    eventObservers.push(observer);
  }

  unsubscribe(eventName: string, observer: Observer): void {
    const eventObservers = this.subscriptions.get(eventName);
    if (!eventObservers) return;
    const index = eventObservers.indexOf(observer);
    eventObservers.splice(index, 1);
  }

  publish(eventName: string, eventArgs: object): void {
    const eventObservers = this.subscriptions.get(eventName);
    if (!eventObservers) return;
    eventObservers.forEach((handler) => handler(eventArgs));
  }
}

class Agency {
  private bookings: object[] = [];
  public eventBus = new EventBus();
  constructor() {}

  addBooking(booking: object) {
    this.bookings.push(booking);
    // this.logger.log({ event: "booking-created: ", data: booking });
    this.eventBus.publish("booking-created", booking);
  }
  addActivity(activity: object) {
    this.eventBus.publish("activity-created", activity);
  }
}

// ! 😱 App is aware of Agency and Logger
export class App {
  main() {
    const agency = new Agency();
    agency.eventBus.subscribe("booking-created", this.onBookingCreatedLog);
    agency.eventBus.subscribe("booking-created", this.onBookingCreatedPay);
    agency.eventBus.subscribe("activity-created", this.onActivityCreatedLog);
    agency.addBooking({ trip: "Paris", price: 100 });
  }
  private onBookingCreatedLog(data: object): void {
    const logger = new Logger();
    logger.log("info", `Booking created: ${data}`);
  }
  private onActivityCreatedLog(data: object): void {
    const logger = new Logger();
    logger.log("info", `Activity created: ${data}`);
  }
  private onBookingCreatedPay(data: object): void {
    console.log("Payment service called");
  }
}
