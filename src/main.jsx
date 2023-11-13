import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { TasksProvider } from "./providers/TasksProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TasksProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </TasksProvider>
);
