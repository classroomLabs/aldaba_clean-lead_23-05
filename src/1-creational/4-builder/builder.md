# Builder

## Simplifies, drives or standardizes the construction of _complex_ objects.

We should design multiple simple classes with a small number of properties. Also, we should be able to use any method of the class right after construction. You can achieve this by asking for mandatory parameters as construction. However, sometimes we need to deal with complex or poorly designed objects that need some rituals before being usable.

The builder pattern solves this problem by creating a separate class that encapsulates the logic to construct the correct instance. Now, anyone can call this method and safely use the result.

Eventually, some compositions shine as more commonly used. In this case, we can create a Director with a catalog of those pre-made combinations.

### Links

- https://sbcode.net/typescript/builder/
- https://catalins.tech/the-4-creational-design-patterns-in-nodejs-you-should-know#builder
- https://github.com/Vincent-Pang/builder-pattern
- https://betterprogramming.pub/lets-look-at-the-builder-pattern-in-typescript-fb9cf202c04d
- https://dev.to/twinfred/design-patterns-in-javascript-1l2l#constructor-builder-pattern-creational-design

### Sample code

- [x] Logger

### Practice

- [ ] Activity enrollment

### Extra

> Could be implemented using fluid style setters finishing with a build method.
