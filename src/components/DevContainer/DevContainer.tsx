import React from "react";
import { UIProvider } from "../UI/UI";

export type DevContainerProps = {
  children: React.ReactNode;
};

export default function DevContainer(props: DevContainerProps) {
  return (
    <UIProvider>
      <div
        style={{
          width: "100%",
          maxWidth: 600,
          padding: 20,
        }}
      >
        {props.children}
      </div>
    </UIProvider>
  );
}
