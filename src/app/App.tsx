import { useTheme } from "app/providers/Theme";
import { classNames } from "shared/lib/classNames";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export default function App() {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
}
