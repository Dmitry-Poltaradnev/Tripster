import { Outlet } from 'react-router-dom'
import { SideBar } from '@/widgets/side-bar'

import s from './AppLayout.module.scss'

export function AppLayout() {
    return (
        <div className={s.page}>
            <div className={s.container}>
                <aside className={s.sidebar}>
                    <SideBar />
                </aside>

                <main className={s.content}>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}