public class Logger {
  private List entries = new ArrayList();
  public Logger() {}
  public void log(String message) {
    this.entries.add(message);
    System.out.println(message);
  }
}