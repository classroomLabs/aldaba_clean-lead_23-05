# Template Method

## Ensure **common** behavior and allow **custom** implementations

So you have an algorithm that is common to severals processes. Usually involving generic aspects like logging, error handling, etc. The Template Method pattern allows you to define the common behavior in a base class and the specific behavior in subclasses.

This pattern leverages the inheritance mechanism to define the common behavior in a base class and the specific behavior in subclasses. The base class defines the algorithm and the subclasses implement the specific behavior while respecting the Liskov Substitution Principle.

Frameworks use this pattern to provide hooks to be called at specific points of the object life-cycle.

### Links

- https://sbcode.net/typescript/template/

### Sample Code

- [x] Create a template to log business logic

### Tasks

- [ ] For activities reservation: validation - payment - reservation - notification template
