// The receiver
export class EnrolmentService {
  enroll(activity: string, participant: string): void {
    console.log(`Enrolling ${participant} in ${activity}`);
  }

  unenroll(activity: string, participant: string): void {
    console.log(`Un-enrolling ${participant} in ${activity}`);
  }
}

export interface Command {
  receiver: object;
  payload: any;
  execute(): void;
  undo?(): void;
  redo?(): void;
}

export class EnrollCommand implements Command {
  receiver: EnrolmentService = new EnrolmentService();
  payload: any = {};
  execute(): void {
    this.receiver.enroll(this.payload["activity"], this.payload["participant"]);
  }
}
export class UnEnrollCommand implements Command {
  receiver: EnrolmentService = new EnrolmentService();
  payload: any = {};
  execute(): void {
    this.receiver.unenroll(this.payload["activity"], this.payload["participant"]);
  }
}

export class CommandProcessor {
  history: any[] = [];
  failed: any[] = [];
  dispatch(command: Command) {
    try {
      command.execute();
      this.history.push(command);
    } catch (e) {
      this.failed.push(command);
    }
  }
}

// The invoker
export class EnrolmentController {
  processor = new CommandProcessor();
  dispatchEnrollment(activity: string, participant: string): void {
    const command = new EnrollCommand();
    command.payload = { activity, participant };
    this.processor.dispatch(command);
  }
  dispatchUnEnrollment(activity: string, participant: string): void {}
}
