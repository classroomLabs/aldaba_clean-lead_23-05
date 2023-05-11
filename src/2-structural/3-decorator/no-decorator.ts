// ! ❌ Bad example not using decorator

export class Enrolment {
  public enrol(activityId: string, customerId: string, numPlaces: number): string {
    const enrollment = `Enrolled ${customerId} in ${activityId} with ${numPlaces} places`;
    console.log(enrollment);
    return enrollment;
  }
  // ToDo: 😱 add cancellation new functionality
  // ToDo: 😱 notify organizer in both enrolment and cancellation
}

// logging sample

// ! ❌ Bad example not using decorator

export class Logger {
  log(message: string): void {
    console.log(`Logging message: ${message}`);
  }
  // ToDo: 😱 add error logging functionality
  // you are forced to modify the original class
}
