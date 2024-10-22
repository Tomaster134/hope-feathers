import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
      <SnackbarProvider autoHideDuration={5000} style={{ fontSize: "18px" }}>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
);