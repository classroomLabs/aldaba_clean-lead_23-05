# Command

## Takes the definition of **actions** _from methods to classes_ increasing its **versatility**

Any request between objects (direct method callings) can be encapsulated as an object with a method to execute the command. This is the root of the Command pattern. You can enhance the functionality by adding parameters or methods to support defer, undo and redo executions.

There are several objects involved in the Command pattern:

- The **CommandInterface** is defines the execute method and optional undo and redo.
- The **Command** is one concrete class that implements the CommandInterface.
- The **invoker** is the object that calls the execute method of the command.
- The **receiver** is an optional object with the business logic that is called by the command.

The last one is a tricky one. The command can do the job himself inside the execute method. But, in order to achieve another degree of decoupling, the command can call a method of a business object, the receiver. This is the most common approach.

### Links

- https://sbcode.net/typescript/command/
- https://blog.devgenius.io/design-patterns-with-typescript-examples-command-3a7260f15c11

### Sample

- [x] A light bulb and a remote control with on and off buttons

### Tasks

- [ ] Create a command to encapsulate the enrollment and cancellation logic
