import React from "react";

import { storiesOf } from "@storybook/react";
import Button from "./Button";

import { action } from "@storybook/addon-actions";
import { text, color, boolean } from "@storybook/addon-knobs";

storiesOf("Button", module)
  .addParameters({
    info: {
      text: `
      Description of the component  
        ~~~js
        <Button>Click here</Button>
        ~~~
      `
    }
  })
  .add("Button with primary bg color", () => (
    <Button
      onClick={action("primary-button-click")}
      bgStyle={text("color", "lightBlue")}
      disabled={boolean("disabled", false)}
    >
      {text("text", "Click here")}
    </Button>
  ))
  .add("Button with secondary bg color", () => (
    <Button
      onClick={action("secondary-button-click")}
      bgStyle={color("color", "salmon", "group1")}
      disabled={boolean("disabled", false)}
    >
      {text("text", "Click here")}
    </Button>
  ));
