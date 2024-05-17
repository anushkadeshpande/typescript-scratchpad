# Typescript:

Typescript provides all of JS Features along with:
  - Data typing 
  - type operators (ex typeof)
  - function signatures
  - keywords (public, private, protected)
  - generics
  - interfaces
  - decorators (like annotations)


## Hello World!

```js
let message: string;
message = 'Hello world';
console.log(message);
```

We first need to compile it

```
tsc hello.ts
```

This generates hello.js which then can be executed normally.


> TypeScript compiler generates ES3 code (very old!!). But this is for maximum portability. <br>
> We can specify which js version to use using the command:
> `tsc --target es2015 hello.ts`


Even if typescript detects errors, for example:
```js
function func(x, y) {
    return x + y;
}

var res = func(10);
``` 

It'll throw an error, 

```
error TS2554: Expected 2 arguments, but got 1
```

but still generates the js regardless.

To enable strict checking, use `--noEmitOnError` option during compilation.


## Specifying types:

Type of a variable can be specified like this:

```js
let name: string = 'Anna'
```

> If type is not specified, ts infers the type by the assigned value.

Basic types provided by ts:
- number
- bigint
- boolean
- string
- symbol
- function <br> <br>
- object
- void
- never   --> function that never returns normally ex function with infinite loop, function that dispatches an event 
- null
- undefined
- any

#### Arrays:

TS also supports arrays. For example:

```js
let a: number[] = [1, 2] <br>
let b: Array<number> = [3, 4]
```

#### Tuples:

```js
let bd: [number, string];

bd = [3, 'December']; 

let day: number = bd[0];
let month: string = bd[1]; 

```

### Enums:
```
enum Color {R=1, G, B};

let c: Color = Color.R;
```

> That '1' is a mnemonic. These mnemonic can also be a string

The above example is compiled into:

```js
var Color;
(function (Color) {
    Color[Color["R"] = 1] = "R";
    Color[Color["G"] = 2] = "G";
    Color[Color["B"] = 3] = "B";
})(Color || (Color = {}));
;
var c = Color.R;
```

### Strictness check:

`--strict` flag can be used for strict type checking.
- Does not allow `any`
- Does not allow `null` and `undefined`

> Code will still be compiled

Another option is `--noImplicitAny`. It does not allow `any`

Or `--strictNullChecks` which does not allow `null` or `undefined` values.

We can also specify alternate types for a variable using the ***Union operator***

```js
let city: string | null
```