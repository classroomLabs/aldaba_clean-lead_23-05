# Adapter

## Decouples _third-party_ libraries (or _legacy_ code) from _the application_

This pattern allows to communicate two objects that are not compatible without changing any of them. It wraps one of them and exposes a new interface that is compatible with the other object.

The adapter pattern respects the SOLID principles, Open/Closed avoiding any changes in the original code. Liskov Substitution by using composition instead of inheritance. And Interface Segregation depending on abstractions.

### Links

- https://sbcode.net/typescript/adapter/
- https://dev.to/triyanox/design-patterns-in-typescript-e68#adapter
- https://medium.com/globant/design-patterns-in-javascript-structural-106bc31953c9#b054
- https://medium.com/@mariusbongarts/design-patterns-with-real-life-typescript-examples-adapter-d183af1f1462
- https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm#adapter
- https://dev.to/twinfred/design-patterns-in-javascript-1l2l#adapter-pattern-wrapper-pattern-structural-design

### Sample code

- [x] Adapt a third party logger formatter

### Tasks

- [ ] Adapt a payment gateway
