import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames";
import { Button } from "shared/ui/Button";

interface BugButtonProps {
    className?: string;
}

export const BugButton: FC<BugButtonProps> = (props) => {
    const [error, setError] = useState(false);
    const { className } = props;

    const onThrow = () => setError(true);

    const { t } = useTranslation();

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button onClick={onThrow} className={classNames("", {}, [className])}>
            {t("throw-error")}
        </Button>
    );
};
