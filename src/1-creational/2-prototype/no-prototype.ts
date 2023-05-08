/* eslint-disable no-magic-numbers */

// ! ❌ Bad example of not using a prototype
export class Activity {
  constructor(public title: string, public allowsChildren: boolean, public price: number, public date: Date) {}
}

const activity = new Activity("Diving", true, 100, new Date(2025, 2, 7));
// ! 😱 creating a new instance, but a similar one is already created
// It is a painful and error-prone task
const activity2 = new Activity("Diving", true, 100, new Date(2026, 1, 8));
