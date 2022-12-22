# use-react-input
<img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/use-react-input"> <img alt="Snyk Vulnerabilities for npm package" src="https://img.shields.io/snyk/vulnerabilities/npm/use-react-input">

Simple hooks that handles input onChange function for you.

## Motivation

When you build Apps that require complex forms with many input form, you may use libraries
like [react-jsonschema-form](https://www.npmjs.com/package/react-jsonschema-form) or something similar.
<br/>
Don't get me wrong, there's nothing bad about that.
<br/>
The purpose of `use-react-input` is to provide simple hooks that relieve you
of having to manage onChange functions.

You can use these hooks as is or build more complex libraries on top of that.

## ✔️ Getting Started

You can install the module via `npm` or `yarn`:

```sh
npm install use-react-input
```

```sh
yarn add use-react-input
```

## 🔨 Usage

### useInput

```js
import {useInput} from 'use-react-input'

function App() {
    const [name, inputName] = useInput()
    const [surname, inputSurname] = useInput()

    return (
        <div>
            <div>{inputName}</div>
            <div>{inputSurname}</div>
        </div>
    );
}
```

Very similar to `useState` from `React`, `useInput` return a couple of values:

1. The value of the input (you can call it whatever you want)
   <br/>
2. The `<input/>` HTML element that you will render inside your JSX (arbitrary name also).

`useInput` accept 1 object representing any props you would pass into `<input/>` element.
<br/>
Example:

```js
const [name, inputName] = useInput({className: 'my-class', placeholder: 'insert something here...'})
```

`type` is an input property that represent the type of the
input. [Here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) is the whole list.
<br/>
If you do not specify any `type`, default is `text`.

Here's how you can specify different `type`:

```js
const [number, inputNumber] = useInput({type: 'number', placeholder: 'insert a number here...'})
```

You can also specify a default value:

```js
const [number, inputNumber] = useInput({
    type: 'number',
    defaultValue: 30,
    placeholder: 'insert a number here...'
})
```

### useInputCheckbox

`useInputCheckbox` accept almost the same props of  `useInput`, except that the `type` is fixed to `checkbox`, so you
can't change it.

Input checkboxes does not accept `defaultValue`, but accept `defaultChecked` instead:

```js
const [checkbox, inputCheckbox] = useInputCheckbox({
    defaultChecked: true,
})
```

if not specified, the default value of checkbox is `false`.

More examples available on `demo/src/App.js`

### Comparison

Here's how you would handle 2 input text in React without any external libraries:

```js
import {useState} from 'react';

function App() {
    const [name, setName] = useState()
    const [surname, setSurname] = useState()

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeSurname = (event) => {
        setSurname(event.target.value)
    }

    return (
        <form onSubmit={(event) => {
            alert('A name was submitted: ' + name + ' ' + surname);
            event.preventDefault();
        }}>
            <label>
                Name:
                <input type="text" onChange={handleChangeName}/>
            </label>
            <label>
                Surname:
                <input type="text" onChange={handleChangeSurname}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}
```

you could write the same App with few lines of code using `useInput`:

```js
import {useInput} from 'use-react-input';

function App() {
    const [name, inputName] = useInput()
    const [surname, inputSurname] = useInput()

    return (
        <form onSubmit={(event) => {
            alert('A name was submitted: ' + name + ' ' + surname);
            event.preventDefault();
        }}>
            <label>
                Name:
                {inputName}
            </label>
            <label>
                Surname:
                {inputSurname}
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}
```

### Optimize Performance

You have 2 different ways to optimize your input props.
<br/>
Do performance optimization when you are sure about your input props will not change.

1. Declare object props outside of render cycle:

```js
import {useInput} from 'use-react-input'

const nameProps = {className: 'my-class'}
const surnameProps = {className: 'my-class'}

function App() {
    const [name, inputName] = useInput(nameProps)
    const [surname, inputSurname] = useInput(surnameProps)

    return (
        <div>
            <div>{inputName}</div>
            <div>{inputSurname}</div>
        </div>
    );
}
```

2. Use `useMemo` to memoize the object:

```js
import {useMemo} from "react"
import {useInput} from 'use-react-input'

function App() {
    const [name, inputName] = useInput(
        useMemo(() => ({
            className: 'my-class'
        }), [])
    )
    const [surname, inputSurname] = useInput(
        useMemo(() => ({
            className: 'my-class'
        }), [])
    )

    return (
        <div>
            <div>{inputName}</div>
            <div>{inputSurname}</div>
        </div>
    );
}
```

## 💻 Demo

[Live Demo](https://use-react-input-demo.surge.sh/)

## 📁 Project Structure

The project includes a demo folder initialized with Create React App.

When you run the command ```build``` from first-level ```package.json```, a ```dist``` and a ```lib``` folder will be
generated.

The ```lib``` folder will be placed automatically into the demo project.

You can move into ```demo``` directory and ```start``` project from its own package.json script, just like any other
Create React App project.

## ⭐ Contributing and Support ⭐

Contributions of any kind are welcome.

If this package was helpful to you, please consider putting a star ⭐ on the GitHub project.

## License

MIT
