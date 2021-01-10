import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const sans = [
  "Jost",
  "-apple-system",
  "BlinkMacSystemFont",
  "'Segoe UI'",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "'Open Sans'",
  "'Helvetica Neue'",
  "sans-serif",
].join(",");

const mono = [
  "Cousine",
  "Consolas",
  "'Courier New'",
  "Courier",
  "monospace",
].join(",");

export default extendTheme({
  styles: {
    global: (props) => ({
      body: {
        bg: mode("#F2F4F3", "#0A0908")(props),
      },
    }),
  },
  components: {
    Link: {
      variants: {
        link: (props) => ({
          color: mode("#A9927D", "#B6244F")(props),
        }),
      },
    },
  },
  fonts: {
    body: sans,
    heading: sans,
    mono,
  },
});
