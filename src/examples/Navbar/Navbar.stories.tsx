import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DevContainer from "../../components/DevContainer/DevContainer";
import Navbar from "./Navbar";

export default {
  title: "Examples/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template = (): ComponentStory<typeof Navbar> => () =>
  (
    <DevContainer>
      <Navbar />
    </DevContainer>
  );

export const Example = Template().bind({});
