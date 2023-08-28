// @ts-nocheck
import React, { ReactNode } from "react";
import s from "./Logo.module.scss";
import { Text } from "../Text";

export type LogoProps = {
  icon: ReactNode;
  children: ReactNode;
};

export default function Logo(props: LogoProps) {
  return (
    <div className={s["dvs-logo"]}>
      <div className={s["dvs-logo--l"]}>{props.icon}</div>
      <Text className={s["dvs-logo--r"]} variant="h5">
        {props.children}
      </Text>
    </div>
  );
}
