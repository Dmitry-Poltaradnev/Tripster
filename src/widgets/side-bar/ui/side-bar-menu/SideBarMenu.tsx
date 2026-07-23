import {NavLink} from 'react-router-dom'
import {sidebarMenuItems} from "../../../../app/providers/router/router.tsx";
import {ShareIcon} from "../../icons/ShareIcon.tsx";

export const SideBarMenu = () => {
    return (
        <>
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

        </>

    );
};

