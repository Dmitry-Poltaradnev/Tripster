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

export const Input = ({className, placeholder, icon, value, onChange, disabled}: InputProps) => {
    return (
        <div className={s.input}>
            {icon ? <span>{icon}</span> : null}
            <input
                className={className}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};

