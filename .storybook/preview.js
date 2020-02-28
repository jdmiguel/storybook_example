//import JSXAddon from "storybook-addon-jsx";
import { addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { jsxDecorator } from "storybook-addon-jsx";

// decorators
addDecorator(withKnobs);
addDecorator(jsxDecorator);
addDecorator(
  withInfo({
    styles: {
      header: {
        h1: {
          color: "gray",
          fontWeight: 400
        }
      }
    }
  })
);
