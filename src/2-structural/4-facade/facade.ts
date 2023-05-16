// * ✅ Facade solution
import { Enrolment, Notification, Payment } from "./subsystem";

// * Facade class
export class EnrolmentFacade {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    // * 😏 The complexity of the subsystem is hidden from the client code
    const enrolment = new Enrolment();
    const amount = enrolment.getPrice(activityId, numPlaces);
    const payment = new Payment();
    const paymentCode = payment.pay(amount);
    const enrolmentCode = enrolment.enrol(activityId, paymentCode, numPlaces);
    new Notification().notify(customerId);
    return enrolmentCode;
  }
  public cancel(activityId: string, enrolmentCode: string): void {
    // * 😏 The complexity of the subsystem is hidden from the client code
    const enrolment = new Enrolment();
    const refundCode = enrolment.cancel(activityId, enrolmentCode);
    const payment = new Payment();
    payment.refund(refundCode);
  }
}

// * 😏 The client code only depends upon the facade class
export class EnrolmentSystem {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    if (numPlaces > 10) {
      throw new Error("Too many places");
    }
    const enrolmentFacade = new EnrolmentFacade();
    // * 😏 The process is abstracted away from the client code
    const enrolmentCode = enrolmentFacade.enrol(activityId, customerId, numPlaces);
    console.log("EnrolmentSystem: enrolment completed");
    return enrolmentCode;
  }
  public cancel(activityId: string, enrolmentCode: string): void {
    const enrolmentFacade = new EnrolmentFacade();
    // * 😏 The process is abstracted away from the client code
    enrolmentFacade.cancel(activityId, enrolmentCode);
    console.log("EnrolmentSystem: enrolment cancelled");
  }
}

// Logging sample
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
// * Facade class
export class LoggerFacade {
  // * 😏 dependencies are hidden from the client code
  private writer = new Writer();
  private formatter = new Formatter();
  private authService = new AuthService();
  log(message: string): void {
    // * 😏 The complexity of the subsystem is hidden from the client code
    const user = this.authService.getUser();
    const logMessage = this.formatter.format(message, user);
    this.writer.write(logMessage);
  }
}
export class Application {
  // reduce complexity and the number of dependencies
  private logger = new LoggerFacade();
  doThings(): void {
    // * 😏 the client code does his job
    this.logger.log("Doing things");
  }
}
