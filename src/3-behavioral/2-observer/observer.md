# Observer

## Decouples event **emitters** from event **processors** notifying **changes** to **subscribers**

Wherever you have objects, you have some communication between them. The simple way is by calling a method of the other object, called **direct communication**. The problem with this is that the objects are tightly coupled.

Things get worse when the caller needs not one but many objects to be notified of a change. The so-called **broadcast communication**.

In the Observer pattern, communication is one-way. The objects that send notifications are called **emitters** or **publishers**. The objects that receive notifications are called **observers** or **processors**. The observers register with the emitters so that they can be notified of messages (the arguments).

Between the emitter and the observer, there is an intermediate responsible for notifying the observers, keeping track of them, and notifying them when a message is received.

We can call it a subject when notifies changes in specific data or an event bus (or hub, aggregator, dispatcher) when notifies events which are pairs of name and data similar to method calls.

### Links

- https://sbcode.net/typescript/observer/
- https://javascript.plainenglish.io/design-patterns-with-typescript-examples-observer-22e5ae36be4c

### Sample code

- [x] A generic event bus

### Tasks

- [ ] Create a observer communicate business logic with the logger
