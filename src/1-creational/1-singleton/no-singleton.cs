public class Logger {
  private readonly List entries = new List();
  
  public Logger() {}

  public void log(string message) {
    this.entries.Add(message);
    Console.WriteLine(message);
  }
}