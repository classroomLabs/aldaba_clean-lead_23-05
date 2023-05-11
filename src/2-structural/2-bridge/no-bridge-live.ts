// IMPLEMENTATION

export interface Payment {
  pay(amount: number): string;
}

export class PayPal implements Payment {
  public pay(amount: number): string {
    console.log(`Paid ${amount} with PayPal`);
    return `PayPalPaymentCode`;
  }
}
export class Stripe implements Payment {
  public pay(amount: number): string {
    console.log(`Paid ${amount} with Stripe`);
    return `StripePaymentCode`;
  }
}

// ABSTRACTION

export interface Enrolment {
  enrol(activityPrice: number, numPlaces: number): string;
}
export abstract class EnrolmentBase implements Enrolment {
  constructor(protected payment: Payment) {}

  abstract enrol(activityPrice: number, numPlaces: number): string;
}
export class EnrolmentApp extends EnrolmentBase {
  public enrol(activityPrice: number, numPlaces: number): string {
    const amount = activityPrice * numPlaces;
    const paymentCode = this.payment.pay(amount);
    return paymentCode;
  }
}
export class EnrolmentSrv extends EnrolmentBase {
  public enrol(activityPrice: number, numPlaces: number): string {
    const amount = activityPrice * numPlaces;
    const paymentCode = this.payment.pay(amount);
    return paymentCode;
  }
}

export class Application {
  public static main(): void {
    // const enrolment: Enrolment = new EnrolmentApp();
    // enrolment.payment = new PayPal();
    const enrolment: Enrolment = new EnrolmentSrv(new Stripe());
    const paymentCode = enrolment.enrol(100, 2);
    console.log(paymentCode);
  }
}
