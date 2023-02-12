import { BugButton } from "app/providers/ErrorBoundry";
import { useTranslation } from "react-i18next";

export default function MainPage() {
    const { t } = useTranslation("main");

    return (
        <div>
            <BugButton />
            <div>{t("main-page")}</div>
        </div>
    );
}
