import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
} from "entities/Profile";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    ReducersList,
    useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader.ts/useDynamicModuleLoader";

interface ProfilePageProps {
    className?: string;
}

const initialReducers: ReducersList = {
    profile: profileReducer,
};

export default function ProfilePage({ className }: ProfilePageProps) {
    const { t } = useTranslation("profile");
    const dispatch = useAppDispatch();
    useDynamicModuleLoader(initialReducers);

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <div className={classNames("", {}, [className])}>
            <ProfileCard />
        </div>
    );
}
