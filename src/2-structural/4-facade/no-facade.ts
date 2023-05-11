// ! ❌ Bad example not using a facade

import { Enrolment, Notification, Payment } from "./subsystem";

export class EnrolmentSystem {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    if (numPlaces > 10) {
      throw new Error("Too many places");
    }
    // ToDo : 🤢 too much coupling and knowledge of the subsystems
    const payment = new Payment();
    const enrolment = new Enrolment(payment);
    const amount = enrolment.getPrice(activityId, numPlaces);
    const enrolmentCode = enrolment.enrol(activityId, amount, numPlaces);
    new Notification().notify(customerId);
    console.log("EnrolmentSystem: enrolment completed");
    return enrolmentCode;
  }
}

// Logging sample

// ! ❌ Bad example not using a facade

class Writer {
  write(message: string): void {
    console.log(`Writing message to file: ${message}`);
  }
}
class Formatter {
  format(message: string, user: string): string {
    return `${user}: ${message}`;
  }
}
class AuthService {
  getUser(): string {
    return "user";
  }
}

export class Application {
  // ToDo : 🤢 too many dependencies
  private writer = new Writer();
  private formatter = new Formatter();
  private authService = new AuthService();
  doThings(): void {
    // ToDo : 🤢 too much coupling and knowledge of the subsystems
    const user = this.authService.getUser();
    const logMessage = this.formatter.format("Doing things", user);
    this.writer.write(logMessage);
  }
}
