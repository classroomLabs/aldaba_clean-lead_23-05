// ! ❌ Bad example not using an observable

class Logger {
  log(data: object): void {
    console.log(data);
  }
}

// ! 😱 Agency depends on Logger
class Agency {
  private bookings: object[] = [];
  constructor(private logger: Logger) {}

  addBooking(booking: object) {
    this.bookings.push(booking);
    // ! 😱 what if we want to send payment or messages or anything else?
    this.logger.log({ event: "booking-created: ", data: booking });
  }
}

// ! 😱 App is aware of Agency and Logger
export class App {
  main() {
    const logger = new Logger();
    const agency = new Agency(logger);
    agency.addBooking({ trip: "Paris", price: 100 });
  }
}
