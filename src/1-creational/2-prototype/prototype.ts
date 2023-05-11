// * ✅ Prototype solution
export class Activity {
  constructor(public title: string, public allowsChildren: boolean, public price: number, public date: Date) {}
  // * 😏 clone method to create a new instance with some changes
  // ToDo: could have a more semantic name like `createEdition`
  cloneEdition(date: Date): Activity {
    // * 😏 create a new instance using the constructor
    // return new Activity(this.title, this.allowsChildren, this.price, date);
    // * 😏 or use Object.assign to clone the existing instance
    // return Object.assign({}, this, { date });
    // * 😏 or use the spread operator to clone the existing instance
    return { ...this, date } as Activity;
  }
}

const activity = new Activity("Diving", true, 100, new Date(2025, 2, 7));
// * 😏 no need to create a new instance, clone the existing one, and ensure the defaults are correct
const activity2 = activity.cloneEdition(new Date(2026, 1, 8));
