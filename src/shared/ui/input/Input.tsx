import s from './Input.module.scss';
import type {ChangeEvent, ReactNode} from "react";

type InputProps = {
    className?: string
    placeholder: string
    icon?: ReactNode
    value?: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean
}

export const Input = ({placeholder, icon, value, onChange, disabled}: InputProps) => {
    return (
        <div className={s.inputWrapper}>
            {icon ? <span className={s.iconInput}>{icon}</span> : null}
            <input
                className={s.input}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

