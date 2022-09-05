import React from "react";

import { Share } from "./Share";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Share",
  component: Share,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    data: [
      {
        image: "/Logo.png",
        name: "Everyone at Oslash",
        members: "25",
        email: "oslash@olash.com",
        access: "No access",
        type: "group",
      },
    ],
    dataPerson: [
      {
        image: "/Logo.png",
        name: "Tom Hank",
        email: "tom@olash.com",
        access: "No access",
      },
      {
        image: "/Logo.png",
        name: "Peter Bellosh",
        email: "peter@olash.com",
        access: "No access",
      },
    ],
    dataGroup: [
      {
        image: "/Logo.png",
        name: "Engineering",
        members: "25",
        email: "oslash@olash.com",
        access: "No access",
      },
    ],
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Share {...args} />;

export const ShareButton = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
ShareButton.args = {
  data: [
    {
      image: "/Logo.png",
      name: "Everyone at Oslash",
      members: "25",
      email: "oslash@olash.com",
      access: "No access",
      type: "group",
    },
  ],
  dataPerson: [
    {
      image: "/Logo.png",
      name: "Tom Hank",
      email: "tom@olash.com",
      access: "No access",
    },
    {
      image: "/Logo.png",
      name: "Peter Bellosh",
      email: "peter@olash.com",
      access: "No access",
    },
  ],
  dataGroup: [
    {
      image: "/Logo.png",
      name: "Engineering",
      members: "25",
      email: "oslash@olash.com",
      access: "No access",
    },
  ],
};
