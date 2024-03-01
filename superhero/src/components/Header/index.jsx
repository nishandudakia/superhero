import {NavLink, Outlet} from "react-router-dom"

const Header = () => {
    return (
        <>
                <header>
                    <nav>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/profile">Profile</NavLink>
                        <NavLink to="/battle">Battle</NavLink>
                    </nav>
                </header>
            <Outlet />
        </>

    )
}

export default Header