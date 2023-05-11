public class Application {
    public void Main() {
        // ! 😱 which implementation to use?
        IWriter writer;
        // ! 🤢 the logic is exposed and 😱 may have to be repeated in other places
        switch (Environment.GetEnvironmentVariable("LOGGER") ?? "console") {
            case "console":
                writer = new ConsoleWriter();
                break;
            case "file":
                writer = new FileWriter();
                break;
            case "database":
                writer = new DatabaseWriter();
                break;
            default:
                throw new Exception("Invalid logger");
        }
        var logger = new Logger(writer);
        logger.Log("Hello world!");
    }
}