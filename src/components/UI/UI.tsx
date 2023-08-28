import { createContext, useContext, useEffect, useState } from "react";
import { Theme } from "../../dtos/theme";
import { COLORS } from "../../constants/colors";

export const UIContext = createContext<{
  theme: Theme;
  // @ts-ignore
}>({});

export type UIProviderProps = {
  children: any;
  theme?: Partial<Theme>;
};

export function UIProvider(props: UIProviderProps) {
  const [theme, setTheme] = useState<Theme>({
    font: "friendly",
    colors: {
      primary: COLORS.PRIMARY,
      secondary: COLORS.SECONDARY,
      tertiary: COLORS.TRANSPARENT,
    },
    primaryButton: {
      backgroundColor: COLORS.PRIMARY,
      borderColor: COLORS.PRIMARY,
      color: COLORS.WHITE,
      borderRadius: 4,
      fontSize: 14,
    },
    secondaryButton: {
      backgroundColor: COLORS.GRAY_SCALE._50,
      borderColor: COLORS.TERTIARY,
      color: COLORS.GRAY_SCALE._900,
      borderRadius: 4,
      fontSize: 14,
    },
    tertiaryButton: {
      backgroundColor: COLORS.TRANSPARENT,
      color: COLORS.GRAY_SCALE._900,
      borderColor: COLORS.TRANSPARENT,
      borderRadius: 4,
      fontSize: 14,
    },
    h1Text: {
      fontSize: "48px",
      lineHeight: "50px",
      fontWeight: "800",
      background: "linear-gradient(180deg, #334155 0%, #0f172a 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h2Text: {
      fontSize: "32px",
      lineHeight: "34px",
      fontWeight: "800",
      background: "linear-gradient(180deg, #334155 0%, #0f172a 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h3Text: {
      fontSize: "24px",
      lineHeight: "26px",
      fontWeight: "800",
      background: "linear-gradient(180deg, #334155 0%, #0f172a 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h4Text: {
      fontSize: "20px",
      lineHeight: "22px",
      fontWeight: "800",
      background: "linear-gradient(180deg, #334155 0%, #0f172a 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h5Text: {
      fontSize: "16px",
      lineHeight: "18px",
      fontWeight: "800",
      background: "linear-gradient(180deg, #334155 0%, #0f172a 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    h6Text: {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "800",
      background: "linear-gradient(180deg, #334155 0%, #0f172a 100%)",
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    pText: {
      fontSize: "14px",
      lineHeight: "16px",
      fontWeight: "400",
      color: COLORS.GRAY_SCALE._500,
    },
  });

  const context = {
    theme,
  };

  useEffect(() => {
    if (props.theme?.colors) {
      setTheme((prev) => ({
        ...prev,
        colors: {
          ...prev.colors,
          ...props?.theme?.colors,
        },
      }));
    }
  }, [props.theme]);

  return (
    //   @ts-ignore
    <UIContext.Provider value={context}>{props.children}</UIContext.Provider>
  );
}

export const useUI = () => useContext(UIContext);
