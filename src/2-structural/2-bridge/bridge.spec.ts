import { EnrolmentApp, PayPal } from "./bridge";

describe("Bridge", () => {
  it("should work", () => {
    const payment = new PayPal();
    const enrolmentApp = new EnrolmentApp(payment);
    const paymentCode = enrolmentApp.enrol(100, 2);
    expect(paymentCode).toBe("PayPalPaymentCode");
  });
});
