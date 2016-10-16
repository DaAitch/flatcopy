# flatcopy
Micro-Library for flat object or array copies in context of immutable objects/arrays.
This is just a small wrapper library with some checks, designed for writing safe code
for object mutation.

## Immutable States
Many change detection strategies profit from immutable structures.
That recursively means, that if a piece of data needs to be changed,
the parent has to be copied before, to not mutate it and that applies up to the root node.

If `oldNode === newNode` then nothing changed. E.g. for view updates etc. this can be
a great performance boost.

```typescript
// example impl. of a state transition with immutable states

// flat copy or an empty object
const _state = flatcopy(state);

// 1. flat copy or an empty array
// 2. mutation of our `_state` copy
const _persons = _state.persons = flatarraycopy(_state.persons);

// 1. flat copy of an empty object
// 2. mutation of our `_persons` copy
const _person = _persons[personId] = flatcopy(_persons[personId]);
_person.name = personName;

// `_state` is the next state without mutation of any objects
// _state.persons                !== state.persons
// _state.persons[personId]      !== state.persons[personId]
// _state.persons[personId].name !== state.persons[personId].name
```