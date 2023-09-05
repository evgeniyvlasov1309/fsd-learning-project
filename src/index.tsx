import { StoreProvider } from "app/providers/StoreProvider";
import { ThemeProvider } from "app/providers/Theme";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "shared/config/i18n/i18n";
import App from "./app/App";

render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById("root")
);
