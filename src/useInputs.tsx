import * as React from "react"
import {InputHTMLAttributes, useMemo, useState} from "react";

type inputDefaultValue = string | number | ReadonlyArray<string> | undefined

export const useInput = (props?: InputHTMLAttributes<HTMLInputElement>) => {
    const [value, setValue] = useState<inputDefaultValue>(props?.defaultValue)
    const input = useMemo(() => (
        <input {...props} type={props?.type || "text"} onChange={(event) => {
            props?.onChange && props.onChange(event)
            setValue(event.target.value)
        }}/>
    ), [props])
    return [value, input]
}

export function useInputCheckbox(props?: InputHTMLAttributes<HTMLInputElement>) {
    const [value, setValue] = useState<boolean>(props?.defaultChecked || false)
    const input = useMemo(() => (
        <input {...props} type={"checkbox"} onChange={(event) => {
            props?.onChange && props.onChange(event)
            setValue(event.target.checked)
        }}/>
    ), [props])
    return [value, input]
}




