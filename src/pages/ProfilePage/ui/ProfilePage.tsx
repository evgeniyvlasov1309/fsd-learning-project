import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import {
    ProfileCard,
    fetchProfileData,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    profileReducer,
} from "entities/Profile";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileForm } from "entities/Profile/model/selectors/getProfileForm/getProfileForm";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { ValidateProfileError } from "entities/Profile/model/types/profile";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    ReducersList,
    useDynamicModuleLoader,
} from "shared/lib/hooks/useDynamicModuleLoader.ts/useDynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Text } from "shared/ui/Text";
import { TextTheme } from "shared/ui/Text/ui/Text";
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader";

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

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('server-error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('incorrect-region'),
        [ValidateProfileError.NO_DATA]: t('no-data-error'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('firstname-surname-error'),
        [ValidateProfileError.INCORRECT_AGE]: t('incorrect-age'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);
    
    return (
        <div className={classNames("", {}, [className])}>
            <ProfilePageHeader />
            {validateErrors?.length && validateErrors.map((err) => (
                <Text
                    key={err}
                    theme={TextTheme.ERROR}
                    text={validateErrorTranslates[err]}
                />
            ))}
            <ProfileCard
                data={formData}
                isLoading={isLoading}
                error={error}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeAge={onChangeAge}
                onChangeCity={onChangeCity}
                onChangeUsername={onChangeUsername}
                onChangeAvatar={onChangeAvatar}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
            />
        </div>
    );
}
