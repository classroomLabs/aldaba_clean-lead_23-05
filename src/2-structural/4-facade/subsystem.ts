export class Payment {
  public pay(amount: number) {
    console.log(`Paid ${amount} with PaymentPal`);
  }
}

export class Enrolment {
  constructor(protected payment: Payment) {}
  public getPrice(activityId: string, numPlaces: number): number {
    console.log(`Got price for ${activityId} `);
    return 100 * numPlaces;
  }
  public enrol(activityId: string, amount: number, numPlaces: number): string {
    this.payment.pay(amount);
    const enrolmentCode = `Enrolled in ${activityId} with ${numPlaces} places`;
    console.log(enrolmentCode);
    return enrolmentCode;
  }
}

export class Notification {
  public notify(customerId: string) {
    console.log(`Sending message to ${customerId} with enrolment info`);
  }
}
