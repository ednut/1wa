import ReactDOM from "react-dom";
import { ThemeManager } from "./ThemeManager";
import App from "./App";

ReactDOM.render(
  <ThemeManager>
    <App />
  </ThemeManager>,
  document.getElementById("root")
);
