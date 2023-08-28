// @ts-nocheck
import React, {
  CSSProperties,
  ReactNode,
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import { useUI } from "../UI/UI";
import s from "./Button.module.scss";
import { fontFamily } from "../../utils/font";
export type ButtonThemes = "PRIMARY" | "SECONDARY" | "TERTIARY";

export type ButtonProps = {
  theme: ButtonThemes;
  full?: boolean;
  ariaLabel?: string;
  icon?: ReactNode;
  iconLocation?: "LEFT" | "RIGHT";
};

function Button(
  props: ButtonProps &
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
): JSX.Element {
  const { theme } = useUI();

  const buttonTheme = {
    PRIMARY: theme.primaryButton,
    SECONDARY: theme.secondaryButton,
    TERTIARY: theme.tertiaryButton,
  }[props.theme];

  return (
    <button
      {...props}
      aria-label={
        props.ariaLabel
          ? props.ariaLabel
          : typeof props.children === "string"
          ? props.children
          : undefined
      }
      style={{
        ...buttonTheme,
        fontFamily: fontFamily(theme.font),
        ...props.style,
      }}
      className={`${props.className || ""} ${s[`dvs-button--${props.theme}`]} ${
        props.full ? s["dvs-button--full"] : ""
      }`}
    >
      {props.icon && props.iconLocation === "LEFT" ? props.icon : null}
      {props.children}
      {props.icon && props.iconLocation === "RIGHT" ? props.icon : null}
    </button>
  );
}

Button.defaultProps = {
  iconLocation: "RIGHT",
};

export default Button;
