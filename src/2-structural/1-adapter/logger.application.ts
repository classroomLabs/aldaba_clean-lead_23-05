export type LogCategory = "info" | "error" | "debug";

export type LogEntry = {
  category: LogCategory;
  message: string;
  timestamp: Date;
};
