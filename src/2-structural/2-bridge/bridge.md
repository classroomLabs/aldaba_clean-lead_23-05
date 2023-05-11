# Bridge

## Allows several (usually two) complex _subsystem_ to evolve _independently_

It is the generalization of the adapter pattern. It allows to decouple objects by using interfaces (the bridge) between their abstractions, so that the two can vary independently.

The bridge pattern respects the SOLID principles, Open/Closed by using interfaces. Liskov Substitution by using composition instead of inheritance. And Interface Segregation depending on abstractions.

Two related concepts are the abstraction and the implementation. The abstraction is the interface that the client uses to interact with the object. The implementation is the object used by the abstraction. Both can evolve independently, only respecting the contract of their interfaces.

### Links

- https://sbcode.net/typescript/bridge/
- https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm#bridge
- https://medium.com/globant/design-patterns-in-javascript-structural-106bc31953c9#0452
- https://jsmanifest.com/bridge-design-patterin-in-javascript/
- https://dev.to/coly010/the-bridge-pattern-design-patterns-meet-the-frontend-46fc

### Sample code

- [x] Create a bridge between payment services and enrollment applications
