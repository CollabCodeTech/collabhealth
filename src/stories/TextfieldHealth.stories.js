import { storiesOf } from "@storybook/svelte";
import TextfieldHealth from "./components/atoms/TextfieldHealthView.svelte";

storiesOf("TextfieldHealth", module).add("Default", () => ({
  Component: TextfieldHealth,

  props: {
    placeholder: "Nome"
  }
}));
