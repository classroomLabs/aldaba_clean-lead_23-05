// ! ❌ Bad example not using a memento

// ! 😱 want to save state of an object to undo operations deferred in time
export class Activity {
  private title: string;
  private attendeesRepository: string[] = [];
  private places: number;
  private reservedPlaces: number = 0;
  private status: "pending" | "confirmed" = "pending";
  private minimumAttendees: number = 3;
  public readonly isConfirmed: boolean = this.status === "confirmed";

  constructor(title: string, places: number) {
    this.title = title;
    this.places = places;
  }

  get availablePlaces(): number {
    return this.places - this.reservedPlaces;
  }

  enroll(name: string): void {
    if (this.reservedPlaces >= this.places) {
      throw new Error("No more places available on " + this.title);
    }
    this.attendeesRepository.push(name);
    this.reservedPlaces++;
    if (this.reservedPlaces >= this.minimumAttendees) {
      this.status = "confirmed";
    }
  }
  cancel(): void {
    // ! 😱 un do enrolment cancel logic is needed here
    if (this.attendeesRepository.length === 0) {
      return;
    }
    this.attendeesRepository.pop();
    this.reservedPlaces--;
    if (this.reservedPlaces < this.minimumAttendees) {
      this.status = "pending";
    }
  }
}
