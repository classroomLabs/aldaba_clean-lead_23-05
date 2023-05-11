// * ✅ Bridge solution
// * ABSTRACTION
// * Abstraction interface
export interface IEnrolment {
  enrol(activityPrice: number, numPlaces: number): string;
}

// * abstraction using implementor interface
export abstract class EnrolmentBase implements IEnrolment {
  protected payment: IPayment;
  constructor(payment: IPayment) {
    this.payment = payment;
  }
  public abstract enrol(activityPrice: number, numPlaces: number): string;
}
// * concrete (refined) abstraction
export class EnrolmentLib extends EnrolmentBase {
  constructor() {
    super(new PayPal());
  }
  public enrol(activityPrice: number, numPlaces: number): string {
    const amount = activityPrice * numPlaces;
    const paymentCode = super.payment.pay(amount);
    return paymentCode;
  }
}
// * another concrete (refined) abstraction
export class EnrolmentDiscountService extends EnrolmentBase {
  constructor() {
    super(new Stripe());
  }
  public enrol(activityPrice: number, numPlaces: number): string {
    const amount = activityPrice * numPlaces * 0.8;
    const paymentCode = super.payment.pay(amount);
    return paymentCode;
  }
}
// * IMPLEMENTOR
// * implementor interface
export interface IPayment {
  pay(amount: number): string;
}
// * concrete (refined) implementor
export class PayPal implements IPayment {
  public pay(amount: number): string {
    console.log(`Paid ${amount} with PaymentPal`);
    return `PayPalPaymentCode`;
  }
}
// * another concrete (refined) implementor
export class Stripe implements IPayment {
  public pay(amount: number): string {
    console.log(`Paid ${amount} with Stripe`);
    return `PayPalPaymentCode`;
  }
}

// consumer code
export class Application {
  public static main(): void {
    // * 😏 easy to add new payment methods or new enrolment services
    const enrolment: IEnrolment = new EnrolmentLib();
    const paymentCode = enrolment.enrol(100, 2);
    console.log(paymentCode);
  }
}

// * ✅ Bridge solution
// IMPLEMENTOR
// * implementor interface
export interface Writer {
  write(message: string): void;
}
// * 😏 concrete (refined) implementor
export class FileWriter implements Writer {
  write(message: string): void {
    console.log(`Writing message to file: ${message}`);
  }
}
// * 😏 another concrete (refined) implementor
export class ApiWriter implements Writer {
  write(message: string): void {
    console.log(`Writing message to API: ${message}`);
  }
}

// ABSTRACTION
// * Abstraction interface
export interface Logger {
  readonly writer: Writer;
  log(message: string): void;
}
// * 😏 bridge abstraction
export abstract class LoggerBase implements Logger {
  // * 😏 wraps low-level interface
  writer: Writer;
  constructor(writer: Writer) {
    this.writer = writer;
  }
  // * 😏 exposes high-level interface
  abstract log(message: string): void;
}

// * 😏 concrete (refined) abstraction
export class LoggerApp extends LoggerBase {
  log(message: string): void {
    this.writer.write(message);
  }
}
// * 😏 another concrete (refined) abstraction
export class BrowserLoggerApp extends LoggerBase {
  log(message: string): void {
    this.writer.write(message + " " + navigator.userAgent);
  }
}
