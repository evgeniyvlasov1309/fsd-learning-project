import { Mods, classNames } from "shared/lib/classNames/classNames";

import { Country, CountrySelect } from "entities/Country";
import { Currency, CurrencySelect } from "entities/Currency";
import { useTranslation } from "react-i18next";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Input } from "shared/ui/Input";
import { Loader } from "shared/ui/Loader";
import { Text } from "shared/ui/Text";
import { TextAlign, TextTheme } from "shared/ui/Text/ui/Text";
import { Profile } from "../../model/types/profile";
import cls from "./ProfileCard.module.scss";

interface IProfileCardProps {
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    className?: string;
    readonly?: boolean;
    onChangeLastname?: (value?: string) => void;
    onChangeFirstname?: (value?: string) => void;
    onChangeCity?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeUsername?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Country) => void;
    
}

export const ProfileCard = (props: IProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        readonly,
        onChangeFirstname,
        onChangeLastname,
        onChangeAge,
        onChangeCity,
        onChangeAvatar,
        onChangeUsername,
        onChangeCountry,
        onChangeCurrency,
    } = props;
    const { t } = useTranslation("profile");

    if (isLoading) {
        return (
            <div className={classNames(cls.ProfileCard, { [cls.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
                <Text
                    theme={TextTheme.ERROR}
                    title={t('error-loading-profile')}
                    text={t('try-to-update')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && (
                <div className={cls.avatarWrapper}>
                    <Avatar src={data?.avatar} />
                </div>
            )}
            <Input
                value={data?.first}
                placeholder={t("firstname")}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeFirstname}
            />
            <Input
                value={data?.lastname}
                placeholder={t("surname")}
                className={cls.input}
                readonly={readonly}
                onChange={onChangeLastname}
            />
            <Input
                value={data?.age}
                placeholder={t('age')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('city')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('username')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('avatar')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />
            <CurrencySelect
                className={cls.input}
                value={data?.currency}
                onChange={onChangeCurrency}
                readonly={readonly}
            />
            <CountrySelect
                className={cls.input}
                value={data?.country}
                onChange={onChangeCountry}
                readonly={readonly}
            />
        </div>
    );
};
