import { FC } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button";
import { Input } from "shared/ui/Input/ui/Input";
import cls from "./LoginForm.module.scss";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                placeholder={t("enter-username")}
                autofocus
            />
            <Input
                type="text"
                className={cls.input}
                placeholder={t("enter-password")}
            />
            <Button type="submit" className={cls.loginBtn}>
                {t("login")}
            </Button>
        </div>
    );
};
