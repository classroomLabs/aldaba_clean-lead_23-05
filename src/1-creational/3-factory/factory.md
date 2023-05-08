# Factory

## Creates instances from different classes that implement the **same** interface (or extend the **same** base class)

OOP techniques often end with several classes that implement the same interface or extend from a base class. Those classes are the byproduct of applying the Open/Closed Principle or the Interface Segregation Principle, both part of SOLID principles. The problem arises when we must choose which class to instantiate at runtime.

The Factory Method pattern (factory for short) solves this problem by encapsulating the logic to create the correct instance. This allows us to change the criteria to choose the instance without affecting the rest of the code.

### Links

- https://sbcode.net/typescript/factory/
- https://sbcode.net/typescript/abstract_factory/
- https://dev.to/triyanox/design-patterns-in-typescript-e68#factory
- https://www.patterns.dev/posts/factory-pattern/
- https://medium.com/globant/design-patterns-in-javascript-creational-2a02726e4e71#959e
- https://javascript.plainenglish.io/design-patterns-with-typescript-examples-factory-method-4d145887b141
- https://blog.upperdine.dev/patterns-that-every-developer-should-know#heading-pattern-3-factory

### Sample code

- [x] Logger writers (console, file) logger formatters (json, simple)

### Tasks

- [ ] Dependency injection container (Abstract Factory)

### Extra

Could evolve to be an abstract factory for creating any kind of objects from a catalog of interfaces.
