import { classNames } from "shared/lib/classNames/classNames";

import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Button, ButtonTheme } from "shared/ui/Button";
import { Input } from "shared/ui/Input";
import { Text } from "shared/ui/Text";
import cls from "./ProfileCard.module.scss";

interface IProfileCardProps {
    className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
    const { t } = useTranslation("profile");
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text text={t("title")} />
                <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE}>
                    {t("edit")}
                </Button>
            </div>
            <div className={cls.data}>
                <Input
                    value={data?.first}
                    placeholder={t("firstname")}
                    className={cls.input}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("surname")}
                    className={cls.input}
                />
            </div>
        </div>
    );
};
