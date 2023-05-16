# Strategy

## Choose an implementation **at run time** and use it

When a business process can be executed in several ways, you must code all of them, and your program will choose one. That decision should be encapsulated and never repeated in the code.

To do so, you can use the strategy pattern that requires creating an interface defining the contract of the process. Your code will depend on that abstraction. Then, you can create several implementations of that interface. Finally, you should use an intelligent factory (the strategy) and choose the implementation at run time.

Strategies can be added or removed at runtime without modifying the code that uses them.

The strategy pattern respects the SOLID principles, Open/Closed by using interfaces, Interface Segregation depending on abstractions, and Dependency Inversion by choosing the implementations outside its consumers.

### Links

- https://sbcode.net/typescript/strategy/
- https://dev.to/zeeshanhshaheen/design-patterns-in-javascript-1pgm#strategy
- https://dev.to/twinfred/design-patterns-in-javascript-1l2l#strategy-pattern-behavioral-design
- https://medium.com/@mariusbongarts/design-patterns-with-typescript-examples-strategy-1af9efda0fd0

### Sample code

- [x] Create a strategy to choose a logger based on the entry level

### Tasks

- [ ] Create a strategy to choose a payment method based on the user preferences
