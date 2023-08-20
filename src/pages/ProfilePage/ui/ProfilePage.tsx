import { profileReducer } from "entities/Profile";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import {
    ReducersList, useDynamicModuleLoader
} from "shared/lib/hooks/useDynamicModuleLoader.ts/useDynamicModuleLoader";

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer
};

export default function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation("profile");
    useDynamicModuleLoader(initialReducers);

    return <div className={classNames("", {}, [className])}>{t("profile-page")}</div>;
}
