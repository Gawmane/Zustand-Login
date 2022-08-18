
import { NavLink } from "react-router-dom"

import Login from "../Pages/Login/Login";
import Logout from "../Pages/Login/Logout";
import UseLoginStore from "../Pages/Login/UseLoginStore";


export const Navigation = () => {
    const { loggedIn } = UseLoginStore((store) => ({
        loggedIn: store.loggedIn,
    }))
    return (
        <nav>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/dashboard'}>Min side</NavLink></li>
                <li><NavLink to={'/events'}>Events </NavLink></li>
                <li><NavLink to={'/goals'}>Goals </NavLink></li>


                <li> {!loggedIn ? <Login /> : <Logout />}</li>
            </ul>
        </nav>
    )
}
