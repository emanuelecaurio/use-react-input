import React, {useMemo} from 'react';
import {
  useInput,
  useInputCheckbox,
} from "./lib";

// if input props will not change, you can declare them outside the render cycle for better performance.
const surnameProps = {style: {background: "azure"}, placeholder: "insert some text here..", onChange: (e) => console.log(e)}

function App() {
  const [name, inputName] = useInput(
      // alternately, you can use "useMemo"
      useMemo(() => ({
        className: 'inputName',
        placeholder: "insert name here..",
        defaultValue: 'test'
      }), [])
  )
  const [surname, inputSurname] = useInput(surnameProps)
  const [color, inputColor] = useInput({type: "color", defaultValue: "#cccccc"})
  const [checkbox1, inputCheckbox1] = useInputCheckbox()
  const [checkbox2, inputCheckbox2] = useInputCheckbox({defaultChecked: true})
  const [number, inputNumber] = useInput({type: "number", placeholder: "insert a number...", defaultValue: 22})
  const [date, inputDate] = useInput({type: "date", placeholder: "insert date..."})
  const [dateTime, inputDateTime] = useInput({type: "datetime-local"})
  const [email, inputEmail] = useInput({type: "email"})
  const [month, inputMonth] = useInput({type: "month"})
  const [range, inputRange] = useInput({type: "range", min: 2, max: 10})
  console.log("name:", name)
  console.log("surname:", surname)
  console.log("color:", color)
  console.log("checkbox1:", checkbox1)
  console.log("checkbox2:", checkbox2)
  console.log("number:", number)
  console.log("date:", date)
  console.log("dateTime:", dateTime)
  console.log("email:", email)
  console.log("month:", month)
  console.log("range:", range)

  return (
      <div className="App">
        <h1>use-react-input demo</h1>
        <h4>check the console: your values are ready without worrying about writing any onChange functions</h4>
        <div>name: {inputName}</div>
        <div>surname: {inputSurname}</div>
        <div>color: {inputColor}</div>
        <div>checkbox1: {inputCheckbox1}</div>
        <div>checkbox2: {inputCheckbox2}</div>
        <div>number: {inputNumber}</div>
        <div>date: {inputDate}</div>
        <div>dateTime local: {inputDateTime}</div>
        <div>email: {inputEmail}</div>
        <div>month: {inputMonth}</div>
        <div>range: {inputRange}</div>
      </div>
  );
}

export default App;
