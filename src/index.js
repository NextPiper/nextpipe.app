// Framework essential imports
import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
// Component imports
import App from "./Components/App";

const color = "#00acc4";
const before = "#D2D2D2";
const theme = createMuiTheme({
  palette: {
    //common: { black: color, white: color },
    //primary: { main: color, dark: color, light: color }
    //text: { primary: color, secondary: color }
  },
  overrides: {
    MuiInput: {
      underline: {
        "&:before": {
          borderBottom: `1px solid ${before}`
        },
        "&:after": {
          borderBottom: `2px solid ${color}`,
          transition: "transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms"
        },
        "&&&&:hover:before": {
          borderBottom: "1px solid rgba(0, 0, 0, 0.42)"
        }
      }
    }
  }
});

// Sets the root div equal to the app to initiate the appplication
ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.querySelector("#root")
);
