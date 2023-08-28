import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import DevContainer from "../DevContainer/DevContainer";
import { ArrowRight, Zap } from "react-feather";

export default {
  title: "Atoms/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = (): ComponentStory<typeof Button> => (args) =>
  (
    <DevContainer>
      <Button {...args} />
    </DevContainer>
  );

export const Primary = Template().bind({});
Primary.args = {
  theme: "PRIMARY",
  children: "Click me",
};

export const Secondary = Template().bind({});
Secondary.args = {
  theme: "SECONDARY",
  children: "Click me",
};

export const Tertiary = Template().bind({});
Tertiary.args = {
  theme: "TERTIARY",
  children: "Click me",
};

export const WithIcon = Template().bind({});
WithIcon.args = {
  theme: "PRIMARY",
  icon: <Zap size={14} />,
  children: "Click me",
};

export const IconOnly = Template().bind({});
IconOnly.args = {
  theme: "PRIMARY",
  children: <ArrowRight size={14} />,
};
