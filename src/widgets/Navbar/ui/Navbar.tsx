import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          О сайте
        </AppLink>
      </div>
    </div>
  );
};