// ! ❌ Bad example not using bridge
export class PayPal {
  pay(amount: number): string {
    console.log(`Paid ${amount} with PaymentPal`);
    return `PayPalPaymentCode`;
  }
}

export class EnrolmentApp {
  // ! 🤢 The abstraction is coupled to the implementation
  enrol(activityPrice: number, numPlaces: number): string {
    const amount = activityPrice * numPlaces;
    const paymentPal = new PayPal();
    const paymentCode = paymentPal.pay(amount);
    return paymentCode;
  }
}

export class Application1 {
  static main(): void {
    // ! 😱 We also want to work with Stripe (no easy way to do it)
    // ! 😱 We also want to accept enrollments via API (no easy way to do it)
    const enrolmentApp = new EnrolmentApp();
    const paymentCode = enrolmentApp.enrol(100, 2);
    console.log(paymentCode);
  }
}

// ! ❌ Bad example not using bridge
// implicit implementor
export class FileWriter {
  write(message: string): void {
    console.log(`Writing message to file: ${message}`);
  }
}

// implicit abstraction
export class Logger {
  // ! 🤢 The abstraction is coupled to the implementation
  log(message: string): void {
    const fileWriter = new FileWriter();
    fileWriter.write(message);
  }
}

export class Application {
  static main(): void {
    // ! 😱 We also want to write to API (no easy way to do it)
    // ! 😱 We also want to log browser user agent (no easy way to do it)
    const logger = new Logger();
    logger.log("Hello World");
  }
}
