
import { Navigation } from '../Partials/Nav'
import { Link } from "react-router-dom";

import Login from "../Pages/Login/Login";
import Logout from "../Pages/Login/Logout";
import UseLoginStore from "../Pages/Login/UseLoginStore";

export const Header = () => {
    // const { loggedIn } = UseLoginStore((store) => ({
    //     loggedIn: store.loggedIn,
    // }))
    return (
        <>

            <Navigation />

            {/* {!loggedIn ? <Login /> : <Logout />} */}
            {/* <Link to="/dashboard">{!loggedIn ? "Public Dashboard" : "Private Dashborad"}</Link> */}

        </>

    )
}
export default Header;



