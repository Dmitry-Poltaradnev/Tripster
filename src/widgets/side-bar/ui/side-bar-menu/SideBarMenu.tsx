import {NavLink} from 'react-router-dom'
import {ShareIcon} from "../../icons";
import {sidebarMenuItems} from "../../model/menuItems.ts";
import s from './SideBarMenu.module.scss'
import clsx from "clsx";

export const SideBarMenu = () => {
    return (
        <>
            <ul className={s.menuList}>
                {sidebarMenuItems.map(({path, label, icon: Icon}) => (
                    <li key={path}>
                        <NavLink
                            to={path}
                            end={path === '/'}
                            className={({isActive}) =>
                                clsx(s.menuItem, isActive && s.active)
                            }
                        >
                            <span><Icon/></span>
                            <span>{label}</span>
                        </NavLink>
                    </li>
                ))}
            </ul>
            <button className={s.menuItem}>
                <span>
                    <ShareIcon/>
                </span>
                <span>Share</span>
            </button>
        </>
    );
};

