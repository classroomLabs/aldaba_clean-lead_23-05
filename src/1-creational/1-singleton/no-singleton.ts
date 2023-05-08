// ! ❌ Bad example not using singleton
export class Logger {
  entries: string[] = [];
  constructor() {}
  log(message: string) {
    this.entries.push(message);
    console.log(message);
  }
}
export class Application {
  logger = new Logger();

  main() {
    this.logger.log("Hello world!");
    // ! 🤢 dependency hell, remember to pass the instance down the chain
    const service = new Service(this.logger);
    service.doSomething();
  }
}
export class Service {
  constructor(private logger: Logger) {}
  doSomething() {
    this.logger.log("Doing something...");
    const repository = new Repository();
    repository.save({ name: "" });
  }
}
export class Repository {
  // ! 😱 another instance, potentially different from the one in Application
  private logger: Logger = new Logger();

  save(user: { name: string }) {
    this.logger.log("Saving user..." + user);
  }
}
