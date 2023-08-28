import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputProps = {
  label?: string;
};

export default function Input(
  props: InputProps &
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
) {
  return (
    <>
      {props.label && <label>{props.label}</label>}
      <input {...props} />
    </>
  );
}
