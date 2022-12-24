import React from "react"
import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import {useInput} from "../useInputs";

function App() {
    const [, inputName] = useInput({defaultValue: "name-example"})
    const [, inputSurname] = useInput({defaultValue: "other"})
    return (
        <div>
            <div>{inputName}</div>
            <div>{inputSurname}</div>
        </div>
    );
}

test('show default value of inputs', () => {
    render(<App/>)
    expect(screen.getByDisplayValue('name-example')).toBeInTheDocument();
    expect(screen.getByDisplayValue('other')).toBeInTheDocument();
})