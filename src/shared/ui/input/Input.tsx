import s from './Input.module.scss';
import {LensIcon} from "./icons/LensIcon.tsx";

export const Input = () => {
    return (
        <div className={s.input}>
            <span>
                <LensIcon/>
            </span>
            <input placeholder={'Search countries...'} type="text"/>
        </div>
    );
};

