import s from './Input.module.scss';
import type {ReactNode} from "react";

type InputProps = {
    placeholder: string
    icon?: ReactNode
}

export const Input = ({placeholder, icon}: InputProps) => {
    return (
        <div className={s.input}>
            {icon ? <span>{icon}</span> : null}
            <input placeholder={placeholder} type="text"/>
        </div>
    );
};

