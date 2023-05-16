import { LightBulb, LightOffCommand, LightOnCommand, RemoteControl } from "./command";

describe("Command", () => {
  it("should turn on the light", () => {
    const lightBulb = new LightBulb();
    const remoteControl = new RemoteControl();
    const lightOnCommand = new LightOnCommand(lightBulb);
    const lightOffCommand = new LightOffCommand(lightBulb);

    remoteControl.setOnCommand(lightOnCommand);
    remoteControl.setOffCommand(lightOffCommand);

    remoteControl.pressOnButton(20);
    expect(lightBulb["brightness"]).toBe(20);

    remoteControl.pressOffButton();
    expect(lightBulb["brightness"]).toBe(0);
  });
});
