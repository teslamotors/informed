# How remove works

```
  0, 1, 2, 3, 4, 5, 6, 7
  a, b, c, d, e, f, g, h

Goal: remove d

EndState:

  0, 1, 2, 3, 4, 5, 6, 7
  a, b, c, e, f, g, h

------------------------------------------------

a -> stays
b -> stays
c -> stays
d -> gets removed
e -> moves from 4 to 3
f -> moves from 5 to 4
g -> moves from 6 to 5
h -> moves from 7 to 6
```

Next we need to consider how `informed` works.

`useField(“fieldName”)`

Which in the case of array fields is this

`useField(“arrays[3].fieldName”)`

**By Design** informed’s `useField` will trigger a `useEffect` anytime a fields name changes

**why?** because that is how its state is tracked and it must be re-registered under that new name

```js
// Register
useEffect(
  () => {
    if (isRelevant) {
      // We already initialized before the render so the input exists in the form state, we need to redo after the render
      logger('Register', name, metaRef.current);
      formController.register(name, metaRef);
      logger('Second Initialize', name);
      formController.initialize(name, metaRef, false);
    }
    return () => {
      logger('De-Register', name, metaRef.current);
      formController.deregister(name); // <<<<<<<<<< THIS IS KEY !!!!!!!!!!!!
    };
  },
  [name]
);
```

Inside of `FormController` this code is called ( basically tells it to no longer track this field under that name )

```js
  deregister(name) {
    debug('De-Register', name);
    if (this.fieldsMap.get(name)) {
      this.fieldsMap.delete(name);
      this.emit('field', name);
    }
  }
```

In addition to the useEffect that triggers based on the fields `name` we also have a normal `useEffect` with **NO** dependencies

**What does this mean? When does this trigger?** It means we can have a `cleanup` function that we return from this `useEffect` that will clean up anytime this field gets unmounted

For normal use case of `un-rendering` a from field the above useEffect is GREAT! It does exactly what we want…

```js
// Cleanup on un-mount
useEffect(() => {
  return () => {
    // … some other code
    formController.remove(metaInfo.name, metaInfo.keep, metaInfo); // <<<< IMPORTANT LINE ( tells form to remove this field! )
  };
}, []);
```

**HOWEVER!** This is bad when we are performing an array field removal!

**WHY?** Because informed will try to perform a state removal of `“arrays[3].fieldName”` ( in our example field d ) but we DONT want to remove it from the form state… we want to `PULL IT` out of the array.

**The Solution** To solve this, we can tell the `FormController` to `lock` any removals that attempt to occur while the re-registration of all fields happens

In other words, the second the user clicks on the `Remove` for field d ( the field at index 3 ) we can tell the form to block any removals until all the fields have finished `re-registering`

**How do we know when that is done??** Simple, on user click of remove `d` ( at index 3 ) we simply take note on the length of our array ( in this case a, b, c, d, e, f, g, h is 8 )

So we know that e, f, g, and h all need to re-register under new names and that because our array is shrinking by a size of 1 we know that the last field to deregister will be at index 7

Therefore, we have code written to detect this located in `useArrayField` and that allows our form to unlock itself to allow future removals`

```
e -> moves from 4 to 3
f -> moves from 5 to 4
g -> moves from 6 to 5
h -> moves from 7 to 6 << Detect deregister on 7 and unlock
```

## Move

Now lets consider move(i, j)

Where i is the index of the field we want to move

And j is the location we want to move it to

```
  0, 1, 2, 3, 4, 5, 6, 7
  a, b, c, d, e, f, g, h

Goal: move h between d and e

EndState:

  0, 1, 2, 3, 4, 5, 6, 7
  a, b, c, d, h, e, f, g

------------------------------------------------

a -> stays
b -> stays
c -> stays
d -> stays
h -> moves from 7 to 4
e -> moves from 4 to 5
f -> moves from 5 to 6
g -> moves from 6 to 7
```

    Notice how we have a similar scenario where e, f, g, and h will all be de registering

... now i need time to think ...

My initial thinking is we dont need lock because we are not removing anything

.. its possible that we may only need to create the move at the data structure level

i.e ObjectMap
