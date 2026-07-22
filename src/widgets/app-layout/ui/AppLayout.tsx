import {SideBar} from "../../side-bar";
import {Outlet} from "react-router-dom";

export function AppLayout() {
    return (
        <div>
            <SideBar/>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

