import {SideBar} from "@/widgets/side-bar";
import {Outlet} from "react-router-dom";
import s from './AppLayout.module.scss'

export function AppLayout() {
    return (
        <div className={s.layout}>
            <aside className={s.sidebar}>
                <SideBar/>
            </aside>
            <main className={s.content}>
                <Outlet/>
            </main>
        </div>
    );
}

