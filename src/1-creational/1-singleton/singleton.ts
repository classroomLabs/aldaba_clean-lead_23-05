// * ✅ Singleton solution
export class Logger {
  // ToDo: alternatively, make the constructor private and add a static method to get the instance
  private static instance: Logger;
  entries: string[] = [];

  constructor() {
    if (Logger.instance) {
      // * return the existing instance
      return Logger.instance;
    }
    // * real initialization only happens the first time
    Logger.instance = this;
  }

  log(message: string) {
    this.entries.push(message);
    console.log(message);
  }
}

export class Application {
  logger = new Logger();

  main() {
    this.logger.log("Hello world!");
    // * 😏 no need to pass the instance down the chain
    const service = new Service();
    service.doSomething();
  }
}
export class Service {
  // * 😏 no worries about dependencies
  private logger: Logger = new Logger();

  doSomething() {
    this.logger.log("Doing something...");
    const repository = new Repository();
    repository.save({ name: "" });
  }
}
export class Repository {
  // * 😏 no new instance created
  private logger: Logger = new Logger();

  save(user: { name: string }) {
    this.logger.log("Saving user..." + user);
  }
}
