// * ✅ Memento solution
export class Activity {
  private title: string;
  private attendeesRepository: string[] = [];
  private places: number;
  private reservedPlaces: number = 0;
  private status: "pending" | "confirmed" = "pending";
  private minimumAttendees: number = 3;
  public readonly isConfirmed: boolean = this.status === "confirmed";

  private memento: ActivityMemento | null = null;

  constructor(title: string, places: number) {
    this.title = title;
    this.places = places;
  }

  get availablePlaces(): number {
    return this.places - this.reservedPlaces;
  }
  enroll(name: string): void {
    this.saveState(); // * 😏 allows to undo this action
    if (this.attendeesRepository.length >= this.places) {
      throw new Error("No more places available on " + this.title);
    }
    this.attendeesRepository.push(name);
    this.reservedPlaces++;
    if (this.reservedPlaces >= this.minimumAttendees) {
      this.status = "confirmed";
    }
  }
  cancelLastCommand(): void {
    this.restoreState();
  }
  saveState() {
    // * 😏 similar to a snapshot or prototype
    const state: ActivityState = {
      title: this.title,
      attendees: [...this.attendeesRepository],
      places: this.places,
    };
    // * 😏 the state is now serializable
    this.memento = new ActivityMemento(state);
  }
  restoreState(): void {
    // * 😏 similar to builder
    if (!this.memento) {
      return;
    }
    const state = this.memento.restoreState();
    // * 😏 set private values
    this.title = state.title;
    this.attendeesRepository = state.attendees;
    this.places = state.places;
    // * 😏 calculate private values
    this.reservedPlaces = state.attendees.length;
    this.status = this.reservedPlaces >= 3 ? "confirmed" : "pending";
  }
}

type ActivityState = {
  title: string;
  attendees: string[];
  places: number;
};

class ActivityMemento {
  private title: string;
  private attendees: string[];
  private places: number;

  // * 😏 allows undo operations deferred in time

  constructor(state: ActivityState) {
    this.title = state.title;
    this.attendees = state.attendees;
    this.places = state.places;
    // * 😏 Could also be a JSON.stringify() of the object or saving to a file
  }

  restoreState(): ActivityState {
    // 😏 Could also be a JSON.parse() of the string or reading from a file
    return {
      title: this.title,
      attendees: this.attendees,
      places: this.places,
    };
  }
}
