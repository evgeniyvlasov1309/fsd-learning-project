import React, {
    FC,
    InputHTMLAttributes,
    memo,
    useEffect,
    useRef,
    useState,
} from "react";
import { classNames } from "shared/lib/classNames";
import { Mods } from "shared/lib/classNames/classNames";
import cls from "./Input.module.scss";

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "value" | "onChange"
>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    autofocus?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Input: FC<InputProps> = memo((props: InputProps) => {
    const {
        className,
        value,
        type,
        onChange,
        placeholder,
        autofocus,
        readonly,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };

    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    
    return (
        <div className={classNames(cls.inputWrapper, mods, [className])}>
            {placeholder && (
                <div className={cls.placeholder}>{`${placeholder}>`}</div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                readOnly={readonly}
                onFocus={onFocus}
                onBlur={onBlur}
                {...otherProps}
            />
        </div>
    );
});
