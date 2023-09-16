import { Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from '../../ui'
import { Dc, Hero, Marvel, Search } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="marvel" element={<Marvel />}></Route>
                    <Route path="dc" element={<Dc />}></Route>

                    <Route path="search" element={<Search />}></Route>
                    <Route path="hero/:id" element={<Hero />}></Route>

                    <Route path="/" element={<Navigate to="/marvel" />}></Route>
                </Routes>

            </div>

        </>
    )
}
