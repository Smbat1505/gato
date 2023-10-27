# Diamond Shape Generator

## Task

You need to create a function that generates a string resembling a diamond shape when printed on the screen. The diamond shape should be formed using asterisk (*) characters. Trailing spaces should be removed, and each line must be terminated with a newline character (`\n`).

The function should return `null`, `nil`, `None`, or any equivalent value in your programming language if the input is an even number or a negative number. This is because it's not possible to create a diamond shape with an even or negative size.

## Examples

- A size 3 diamond:

```
    *
   ***
    *
```
- ...which would appear as a string of ```"*\n***\n *\n"```

- A size 5 diamond:
```
    *
   ***
  *****
   ***
    *
```
- ...that is:

```*\n ***\n*****\n ***\n  *\n```
