import {NavLink} from 'react-router-dom'
import {ShareIcon} from "../../icons";
import {sidebarMenuItems} from "../../model/menuItems.ts";
import s from './SideBarMenu.module.scss'

export const SideBarMenu = () => {
    return (
        <>
            <ul>
                {sidebarMenuItems.map(({path, label, icon: Icon}) => (
                    <li className={s.menuItemTitle} key={path}>
                        <NavLink to={path}>
                            <Icon/>
                            {label}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div>
                <ShareIcon/>
                <p>Share</p>
            </div>
        </>
    );
};

