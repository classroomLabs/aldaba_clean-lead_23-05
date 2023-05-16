import { EventBus } from "./observer";

describe("Observer", () => {
  it("should notify subscribers", () => {
    const eventBus = new EventBus();
    const listener = jest.fn();
    eventBus.subscribe("test", listener);
    eventBus.publish("test", { message: "hello" });
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener).toHaveBeenCalledWith({ message: "hello" });
  });
});
