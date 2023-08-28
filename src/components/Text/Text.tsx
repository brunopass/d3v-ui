// @ts-nocheck
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import s from "./Text.module.scss";
import { useUI } from "../UI/UI";
import { fontFamily } from "../../utils/font";
export type TextProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
};

export default function Text(
  props: TextProps &
    DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
): JSX.Element {
  const { theme } = useUI();
  const text = {
    h1: (
      <h1
        {...props}
        style={{
          ...theme.h1Text,
          fontFamily: fontFamily(theme.font),
          ...props.style,
        }}
        className={`${props.className || ""} ${
          s[`dvs-text--${props.variant}`]
        }`}
      />
    ),
    h2: (
      <h2
        {...props}
        style={{
          ...theme.h2Text,
          fontFamily: fontFamily(theme.font),
          ...props.style,
        }}
        className={`${props.className || ""} ${
          s[`dvs-text--${props.variant}`]
        }`}
      />
    ),
    h3: (
      <h3
        {...props}
        style={{
          ...theme.h3Text,
          fontFamily: fontFamily(theme.font),
          ...props.style,
        }}
        className={`${props.className || ""} ${
          s[`dvs-text--${props.variant}`]
        }`}
      />
    ),
    h4: (
      <h4
        {...props}
        style={{
          ...theme.h4Text,
          fontFamily: fontFamily(theme.font),
          ...props.style,
        }}
        className={`${props.className || ""} ${
          s[`dvs-text--${props.variant}`]
        }`}
      />
    ),
    h5: (
      <h5
        {...props}
        style={{
          ...theme.h5Text,
          fontFamily: fontFamily(theme.font),
          ...props.style,
        }}
        className={`${props.className || ""} ${
          s[`dvs-text--${props.variant}`]
        }`}
      />
    ),
    h6: (
      <h6
        {...props}
        style={{
          ...theme.h6Text,
          fontFamily: fontFamily(theme.font),
          ...props.style,
        }}
        className={`${props.className || ""} ${
          s[`dvs-text--${props.variant}`]
        }`}
      />
    ),
    p: (
      <p
        {...props}
        style={{
          ...theme.pText,
          fontFamily: fontFamily(theme.font),
          ...props.style,
        }}
        className={`${props.className || ""} ${
          s[`dvs-text--${props.variant}`]
        }`}
      />
    ),
  }[props.variant];

  return text;
}
