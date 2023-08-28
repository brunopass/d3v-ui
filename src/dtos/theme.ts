import { CSSProperties } from "react";

export type Theme = {
  font: "modern" | "startup" | "default" | "friendly";
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  primaryButton: CSSProperties;
  secondaryButton: CSSProperties;
  tertiaryButton: CSSProperties;
  h1Text: CSSProperties;
  h2Text: CSSProperties;
  h3Text: CSSProperties;
  h4Text: CSSProperties;
  h5Text: CSSProperties;
  h6Text: CSSProperties;
  pText: CSSProperties;
};
