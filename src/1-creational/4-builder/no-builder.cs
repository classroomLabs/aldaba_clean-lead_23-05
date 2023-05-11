public class Logger
{
    private Formatter _formatter;
    private Writer _writer;

    public void SetFormatter(Formatter formatter)
    {
        _formatter = formatter;
    }

    public void SetWriter(Writer writer)
    {
        if (_formatter == null)
        {
            throw new Exception("Need a formatter");
        }

        if (_formatter is JsonFormatter && writer is DatabaseWriter)
        {
            throw new Exception("Incompatible formatter for this writer");
        }

        _writer = writer;
    }

    public void Log(LogEntry entry)
    {
        if (_writer == null || _formatter == null)
        {
            throw new Exception("Logger is not configured");
        }

        _writer.Write(_formatter.Format(entry));
    }
}

class Application {
  public void Main() {
    var logger = new Logger();
    logger.SetWriter(new FileWriter()); // ! 😱 throws "Need a formatter"
    logger.SetFormatter(new JsonFormatter());
    logger.SetWriter(new DatabaseWriter()); // ! 😱 throws "Incompatible formatter for this writer"
    logger.Log(new { message = "Hello world!" });
    // ! 😱 you must remember to call the methods in the correct order,
    // ! and do it every time you need a new instance
  }
}