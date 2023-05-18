// * ✅ Observer solution

// * 😏 the observer contract is a function used as a listener or callback
type Observer = (data: object) => void;

// * 😏 the observable contract is a set of methods to subscribe, unsubscribe and publish events
interface Observable {
  subscribe(eventName: string, observer: Observer): void;
  unsubscribe(eventName: string, observer: Observer): void;
  publish(eventName: string, eventArgs: object): void;
}
