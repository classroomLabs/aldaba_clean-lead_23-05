// * ✅ Decorator solution

// * original class not modified
export class Enrolment {
  enrol(activityId: string, customerId: string, numPlaces: number): string {
    const enrollment = `Enrolled ${customerId} in ${activityId} with ${numPlaces} places`;
    console.log(enrollment);
    return enrollment;
  }
}

// * generate an interface for the current functionality
export interface Enrol {
  enrol(activityId: string, customerId: string, numPlaces: number): string;
}

// * generate an interface for the new functionality
export interface Cancel {
  cancel(activityId: string, customerId: string): string;
}

// * Create a decorator class that implements the interface by wrapping the original class
export class EnrolmentDecorator implements Enrol, Cancel {
  // * The decorator wraps a reference to the original class
  private enrolment: Enrolment = new Enrolment();

  // * The decorator class delegates the original functionality to the original class
  enrol(activityId: string, customerId: string, numPlaces: number): string {
    this.notifyOrganizer(activityId);
    return this.enrolment.enrol(activityId, customerId, numPlaces);
  }
  // * 😏 The decorator class adds new functionality
  cancel(activityId: string, customerId: string): string {
    const cancellation = `Cancelled ${customerId} in ${activityId}`;
    console.log(cancellation);
    this.notifyOrganizer(activityId);
    return cancellation;
  }
  private notifyOrganizer(activityId: string): void {
    console.log(`Notified organizer of ${activityId}`);
  }
}

// Logger example

// * original class not modified
export class Logger {
  log(message: string): void {
    console.log(`Logging message: ${message}`);
  }
}

// * generate an interface for the current functionality
export interface Log {
  log(message: string): void;
}

// * generate an interface for the new functionality
export interface ErrorLog {
  errorLog(error: Error): void;
}

// * Create a decorator class that implements the interface by wrapping the original class
export class LoggerDecorator implements Log, ErrorLog {
  // * The decorator wraps a reference to the original class
  private logger: Logger = new Logger();

  // * The decorator class delegates the original functionality to the original class
  log(message: string): void {
    // * 😏 could change the functionality if needed
    this.logger.log(message);
  }
  // * 😏 The decorator class adds new functionality
  errorLog(error: Error): void {
    console.log(`Logging error: ${error.message}`);
  }
}
