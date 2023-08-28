import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import DevContainer from "../DevContainer/DevContainer";
import Text from "./Text";

export default {
  title: "Atoms/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const Template = (): ComponentStory<typeof Text> => (args) =>
  (
    <DevContainer>
      <Text {...args} />
    </DevContainer>
  );

export const H1 = Template().bind({});
H1.args = {
  variant: "h1",
  children: "This is a Text",
};

export const H2 = Template().bind({});
H2.args = {
  variant: "h2",
  children: "This is a Text",
};

export const H3 = Template().bind({});
H3.args = {
  variant: "h3",
  children: "This is a Text",
};

export const H4 = Template().bind({});
H4.args = {
  variant: "h4",
  children: "This is a Text",
};

export const H5 = Template().bind({});
H5.args = {
  variant: "h5",
  children: "This is a Text",
};

export const H6 = Template().bind({});
H6.args = {
  variant: "h6",
  children: "This is a Text",
};

export const p = Template().bind({});
p.args = {
  variant: "p",
  children:
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
};
