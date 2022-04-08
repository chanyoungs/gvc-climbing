import ReactDOM from "react-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { App } from "./App";
import { removeWatermark } from "./utils";
import { theme } from "./theme";
import CssBaseline from "@mui/material/CssBaseline";
import ReactGA from "react-ga";

setTimeout(removeWatermark, 1000);

ReactGA.initialize("UA-173197430-1");

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeProvider theme={createTheme(theme)}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  rootElement
);
