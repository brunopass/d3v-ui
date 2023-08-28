import React from "react";
import { Text } from "../../components/Text";
import { Button } from "../../components/Button";
import { ArrowRight } from "react-feather";
import Navbar from "../Navbar/Navbar";

export default function Hero(): JSX.Element {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%", marginTop: 42 }}>
        <Text style={{ marginBottom: 16 }} variant="h1">
          Check out some examples.
        </Text>
        <Text style={{ marginBottom: 16 }} variant="p">
          Dashboard, cards, authentication. Some examples built using the
          components. Use this as a guide to build your own.
        </Text>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Button theme="PRIMARY" icon={<ArrowRight size={14} />}>
            Get started
          </Button>
          <Button theme="SECONDARY">Components</Button>
        </div>
      </div>
    </>
  );
}
