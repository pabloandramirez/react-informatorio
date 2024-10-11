import { ComponentProps } from "react";

type TextInputProps = ComponentProps<'input'> & {
    label: string;
  };


export default function TextInput( {label, ...delegated} : TextInputProps ){
    return(
        <>
            <label htmlFor={delegated.id}>{label}</label>
            <input {...delegated} />
        </>
    )
}