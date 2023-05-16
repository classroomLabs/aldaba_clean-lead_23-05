# Memento

## Stores and restores the **state** of an object without exposing its internal structure

The Memento pattern is like an state manager that allows you to store in a repository the state of an object for restoring it later. This is useful when you need to undo or redo an operation.

The trick is to do it without exposing the internal structure of the object. This allows to work with private attributes and restoring them in a a particular order (like a builder).
