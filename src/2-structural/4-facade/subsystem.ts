export class Payment {
  public pay(amount: number) {
    console.log(`Paid ${amount} with PaymentPal`);
    return `PaymentCode`;
  }
  public refund(paymentCode: string) {
    console.log(`Refunded ${paymentCode}`);
  }
}

export class Enrolment {
  constructor() {}
  public getPrice(activityId: string, numPlaces: number): number {
    console.log(`Got price for ${activityId} `);
    return 100 * numPlaces;
  }
  public enrol(activityId: string, paymentCode: string, numPlaces: number): string {
    const enrolmentCode = `Enrolled in ${activityId} with ${numPlaces} places`;
    console.log(enrolmentCode, paymentCode);
    return enrolmentCode;
  }
  public cancel(activityId: string, enrolmentCode: string): string {
    console.log(`Cancelled enrolment ${enrolmentCode} for ${activityId}`);
    return "RefundCode";
  }
}

export class Notification {
  public notify(customerId: string) {
    console.log(`Sending message to ${customerId} with enrolment info`);
  }
}
