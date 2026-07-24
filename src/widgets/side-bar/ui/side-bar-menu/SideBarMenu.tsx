import {NavLink} from 'react-router-dom'
import {ShareIcon} from "../../icons";
import {sidebarMenuItems} from "../../model/menuItems.ts";

export const SideBarMenu = () => {
    return (
        <aside>
            <ul>
                {sidebarMenuItems.map(({path, label, icon: Icon}) => (
                    <li key={path}>
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
        </aside>
    );
};

