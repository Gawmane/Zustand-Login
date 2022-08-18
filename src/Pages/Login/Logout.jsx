import UseLoginStore from "./UseLoginStore";

const Logout = () => {
    const { setLogout } = UseLoginStore((store) => ({
        setLogout: store.setLogout,
    }));
    const handleLogout = () => {
        setLogout();
    }


    return (
        <>
            <button onClick={() => handleLogout()}>Log ud</button>
        </>
    );
}

export default Logout;