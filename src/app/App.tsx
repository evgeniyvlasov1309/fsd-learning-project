import { useTheme } from "app/providers/Theme";
import { Link } from "react-router-dom";
import { classNames } from "shared";
import { AppRouter } from "./providers/router";
import "./styles/index.scss";

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <AppRouter />
    </div>
  );
}
