// ! ❌ Bad example not using a facade

public class EnrolmentSystem {
  public String enrol(String activityId, String customerId, int numPlaces) {
    if (numPlaces > 10) {
      throw new Error("Too many places");
    }
    Payment payment = new Payment();
    Enrolment enrolment = new Enrolment(payment);
    int amount = enrolment.getPrice(activityId, numPlaces);
    String enrolmentCode = enrolment.enrol(activityId, amount, numPlaces);
    new Notification().notify(customerId);
    System.out.println("EnrolmentSystem: enrolment completed");
    return enrolmentCode;
  }
}