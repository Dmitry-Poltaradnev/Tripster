import {Button} from "@/shared/ui/button";
import s from "./Input.module.scss";
import type {InputHTMLAttributes, KeyboardEvent, ReactNode} from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon?: ReactNode;
    enterVal: (val: string) => void;
    onChangeVal?: (value: string) => void;
    onClose?: () => void;
};

export const Input = ({
                          placeholder,
                          icon,
                          value = "",
                          enterVal,
                          disabled,
                          onFocus,
                          onChangeVal,
                          onClose,
                          onKeyDown,
                          className,
                          ...rest
                      }: InputProps) => {
    const submitValue = () => {
        enterVal(String(value));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Escape") {
            onClose?.();
            return;
        }

        onKeyDown?.(e);

        if (e.key === "Enter" && !e.defaultPrevented) {
            submitValue();
        }
    };

    return (
        <div className={s.inputWrapper}>
            <Button className={s.iconInput} onClick={submitValue}>
                {icon ? <span>{icon}</span> : null}
            </Button>

            <input
                {...rest}
                onFocus={onFocus}
                className={className ?? s.input}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={(e) => onChangeVal?.(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={disabled}
            />
        </div>
    );
};