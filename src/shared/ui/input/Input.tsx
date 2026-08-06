import s from './Input.module.scss';
import {type ReactNode, useState} from "react";

type InputProps = {
    className?: string
    placeholder: string
    icon?: ReactNode
    value?: string
    enterVal: (val: string) => void
    disabled?: boolean
}

export const Input = ({placeholder, icon, value, enterVal, disabled}: InputProps) => {

    const [stateValue, setStateValue] = useState(value || '');

    const submitValue = () => {
        enterVal(stateValue);
    };

    return (
        <div className={s.inputWrapper}>
            <button className={s.iconInput} onClick={submitValue}>
                {icon ? <span>{icon}</span> : null}
            </button>
            <input
                className={s.input}
                placeholder={placeholder}
                type="text"
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        submitValue();
                    }
                }}
                disabled={disabled}
            />
        </div>
    );
};

