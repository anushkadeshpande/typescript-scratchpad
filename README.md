# Typescript:

Typescript provides all of JS Features along with:
  - Data typing 
  - type operators (ex typeof)
  - function signatures
  - keywords (public, private, protected)
  - generics
  - interfaces
  - decorators (like annotations)

<hr>

<!-- index-start -->
## Index

- [Hello World!](#hello-world)
- [Specifying types](#specifying-types)
    - [Arrays](#arrays)
    - [Tuples](#tuples)
    - [Enums](#enums)
  - [Strictness check](#strictness-check)
- [Functions](#functions)
    - [Optional Parameter](#optional-parameter)
    - [Variadic parameters](#variadic-parameters)
    - [Lambda expressions (Arrow functions)](#lambda-expressions-arrow-functions)
    - [Function Overloading](#function-overloading)
    - [Object parameters](#object-parameters)
    - [Type Aliases](#type-aliases)
- [Classes](#classes)
  - [Encapsulation](#encapsulation)
  - [Defining getters and setters](#defining-getters-and-setters)
  - [Defining readonly properties](#defining-readonly-properties)
  - [Static Members](#static-members)
- [Interfaces and Inheritance](#interfaces-and-inheritance)
  - [Defining interfaces](#defining-interfaces)
  - [Discriminated Union](#discriminated-union)
  - [Adding stuff to an existing interface](#adding-stuff-to-an-existing-interface)
<!-- index-end -->



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

<hr>


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

#### Enums:
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

<hr>


## Functions:

Types of functions and return types can be specified as:
```js
function calculate(
  num1: number,
  num2: number = 2,
  calc: boolean
) : number
```

> typeof operator can be used to check the type

> Example: `typeof num1`


> PS: Return type need not be specified, it can be implicitly inferred

To skip passing a value, and use the default value, `undefined` can be used.

#### Optional Parameter:
```js
function calculate(
  num1: number,
  num2: number = 2,
  calc?: boolean
) : number
```

Here `calc` is an optional parameter. The `?` indicates that the param is optional.

If it is not passed, it is `undefined`.



#### Variadic parameters:

```js
function getNames(fname: string, ...otherNames: string[])
```


#### Lambda expressions (Arrow functions):

```js
const getFullName = (fn: string, ln:) : string => ``
```

<hr>

#### Function Overloading:

```js
// Overload #1
function secondsToMidnight(secs: number) : number;

// Overload #2
function secondsToMidnight(h: number, m: number, s: number) : number;

function secondsToMidnight(secsOrH: number, m?: number, s?: number) : number {
  // One Implementation for both
}
```

> PS: JavaScript does not support function overloading.

#### Object parameters:

```js
function setUser(user: {id: number, name: string}) {}
```

#### Type Aliases:
```js
type User = {
  id: number;
  name: string
}

function serUser(user: User) {}
```

> Can also be done using interfaces.


##### Object destructuring:
```js
type User = {
  id: number;
  name: string
}

function setUser({id, name}: User) {}
```

> We can also assign alias to the properties. example, `function setUser({id, name: n}: User) {}`
> <br> and then use `n` instead of `name` in the function 

<hr>

## Classes:

```js
class Employee {
    name: string = '';
    salary: number = -1;
}
```

Each of the fields have to be initialized, else the ts compiler throws an error.

This error can be avoided using `!`. For example,
```js
class Employee {
    name: string!;
    salary: number = -1;
}
```
This basically means, "Don't worry, this value is definitely initialized later via some mechanism."

A constructor can be used to initialize the fields.

### Encapsulation:

```js
class Employee {
    private name: string;
    private salary: number;

    constructor(name: string, salary: number) {
      this.name = name;
      this.salary = salary;
    }
}
```

We can also declare the members like this
```js
class Employee {

    constructor(private name: string, private salary: number) {
      this.name = name;
      this.salary = salary;
    }
}
```


### Defining getters and setters:
```js
class Employee {

    constructor(private _name: string, private _salary: number) {}

    get name() {
      return this._name;
    }

    set name(newName: string) {
      this._name = newName;
    }

    get salary() {
      return this._salary;
    }
}
```

### Defining readonly properties:

We can initialize it using a constructor, and thereafter, it is frozen.

```js
class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
}
```


### Static Members:

```js
class Circle {
  private radius: number;
  private static _PI = 3.142;

  constructor(radius: number) {
    this.radius = radius;
  }

  static get PI() {
    return Circle._PI;
  }
}
```
<hr> 

## Interfaces and Inheritance:

Under the covers, TS inheritance is transpiled into prototypical inheritance in JS.

A class can extend another class using the `extends` keyword.

Additional techniques in super class:
- Can be abstract 
- Can have abstract methods
- Can have protected methods

Additional techniques in client code:
- Type checks via `instanceof`
- Type-casts via  `as` and `<type>`. Ex
  ```js
  if(a instanceof Cat)
    let c = a as Cat
  ```

  OR
  ```js
  if(a instanceof Cat)
    let c = <Cat> a
  ```


> PS: OOP is almost similar to Java


### Defining interfaces:
Example:
```js
interface Loggable {
  log(msg: String) : void;
}


function useLoggableThing(loggable: Loggable) {
  loggable.log('Hello')
}
```

We can also implement an interface in an object literal

Or can implement in a class like Java.

Check this example

```js
class MyClass {
  log(msg: string) {
    console.log("Logging..." + msg)
  }
}

useLoggableThing(new MyClass())


function useLoggableThing(loggable: Loggable) {
  loggable.log("Hellooo...")
}
```

Here, we're not explicitly implementing the interface. Typescript can figure it out!

> Multiple inheritance is supported by ts/js

### Discriminated Union:

Ex:

```js
interface FullTimeRemuneration {
    kind: 'fulltime',
    annualSalary: number
}

interface ContractRemuneration {
    kind: 'contract',
    dailyRate: number
}

type Remuneration = FullTimeRemuneration | ContractRemuneration;

function calcEffectiveSalary(r: Remuneration) {
    if (r.kind === 'fulltime') 
        return r.annualSalary;      
    else
        return r.dailyRate * 240;
}
```



### Adding stuff to an existing interface:

Redefinition of an interface is additive.

So, we can extend an interface without actually modifying the original interface.

```js
interface MyInterface {
    a: string
    f1() : void;
}

interface MyInterface {
    b: string
    f2() : void;
}

function f(obj: MyInterface) {
    obj.a;
    obj.b;
    obj.f1();
    obj.f2();
} 
```

> An interface can also be extended using the `extends` keyword