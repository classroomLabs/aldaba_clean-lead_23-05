// ! ❌ Bad example not using a a template

export class EnrollActivity {
  public execute(destination: string): string {
    // ! 😱 repeated steps
    let businessResult = "";
    try {
      console.log("ℹ️  transaction started");
      const paymentResult = "💸  Paying Activity to " + destination;
      console.log("ℹ️  transaction processed");
      businessResult = "✍🏼 Booking Activity " + paymentResult;
      console.log("ℹ️  action done");
      console.warn("📧 Activity booked " + businessResult);
      console.log("ℹ️  notification sent");
    } catch (error) {
      console.log("ℹ️ 😵‍💫 error: " + error);
    }
    return businessResult;
  }
}

// ToDo: cancel enrollment

// ToDo: confirm activity

export class CancelActivity {
  public execute(destination: string): string {
    // ! 😱 repeated steps
    let businessResult = "";
    try {
      console.log("ℹ️  transaction started");
      const paymentResult = "🤑  Refunding Activity to " + destination;
      console.log("ℹ️  transaction processed");
      businessResult = "😭  Cancelling Activity " + paymentResult;
      console.log("ℹ️  action done");
      console.warn("✅ Done " + businessResult);
      console.log("ℹ️  notification sent");
    } catch (error) {
      console.log("ℹ️ 😵‍💫 error: " + error);
    }
    return businessResult;
  }
}

export class Client {
  private enrolling = new EnrollActivity();
  private cancel = new CancelActivity();
  public run(): void {
    this.enrolling.execute("Snorkeling on the Red Sea");
    this.cancel.execute("Snorkeling on the Red Sea");
  }
}

const client = new Client();
client.run();
