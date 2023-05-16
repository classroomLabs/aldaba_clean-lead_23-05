// ! ❌ Bad example not using a command

export class LightBulb {
  private isOn = false;
  private brightness = 0;

  // 😏 a business class not aware of the command pattern
  // nothing to see here

  turnOn(brightness = 10): void {
    this.isOn = true;
    this.brightness = brightness;
    console.log("Light turned on, brightness", this.brightness);
  }

  turnOff(): void {
    this.isOn = false;
    this.brightness = 0;
    console.log("Light turned off, brightness", this.brightness);
  }
}

export class RemoteControl {
  // ! 😱 tight coupling with the light bulb
  constructor(private lightBulb: LightBulb) {}
  pressOnButton(brightness: number): void {
    this.lightBulb.turnOn(brightness);
  }
  pressOffButton(): void {
    this.lightBulb.turnOff();
  }
}

// Usage
const lightBulb = new LightBulb();
const remoteControl = new RemoteControl(lightBulb);
remoteControl.pressOnButton(20); // Light turned on, brightness 20
remoteControl.pressOffButton(); // Light turned off, brightness 0
