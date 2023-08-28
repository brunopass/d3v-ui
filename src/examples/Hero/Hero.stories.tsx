import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import DevContainer from "../../components/DevContainer/DevContainer";
import Hero from "./Hero";

export default {
  title: "Examples/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

const Template = (): ComponentStory<typeof Hero> => () =>
  (
    <DevContainer>
      <Hero />
    </DevContainer>
  );

export const Example = Template().bind({});
