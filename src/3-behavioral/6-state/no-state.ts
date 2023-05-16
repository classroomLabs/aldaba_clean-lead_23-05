// ! ❌ Bad example not using a state

type ActivityEnrollmentStateType = "Paying" | "Booking" | "Cancelling";

export class ActivityEnrollment {
  state: ActivityEnrollmentStateType;
  execute(data: unknown): unknown {
    switch (this.state) {
      case "Paying":
        return "payment done : " + data;
      case "Booking":
        return "booking done : " + data;
      case "Cancelling":
        return "cancelling done : " + data;
    }
  }
}
