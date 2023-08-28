import React from "react";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { ArrowRight, PenTool } from "react-feather";
import { Logo } from "../../components/Logo";

export default function Navbar(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Logo icon={<PenTool size={20} />}>Devsigners.</Logo>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 8,
        }}
      >
        <Button theme="TERTIARY">About us</Button>
        <Button theme="TERTIARY">Environment</Button>
        <Button theme="PRIMARY">Sign up</Button>
        <Button theme="SECONDARY">Sign in</Button>
      </div>
    </div>
  );
}
