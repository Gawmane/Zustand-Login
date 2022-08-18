import create from "zustand";

const UseLoginStore = create((set) => {
    return {
        //Måler på om vi har en user i localsorge - true/false (loggedin =getter)
        loggedIn: Boolean(localStorage.getItem("user")),

        //Funtion for login - Setter - hvis ikke logged in remove i locaelstorge
        setLoggedIn: (loggedIn = true) => set(() => {
            //hvis ikke logged in remove i locaelstorge - hvis nogen har fjernet den
            if (!loggedIn) {
                localStorage.removeItem("user")
            }
            return { loggedIn }
        }),
        // Bruger til at logge ud - fjerner brugeren
        setLogout: () => set((state) => {
            localStorage.removeItem("user");
            state.loggedIn = false;
        })
    }
})


export default UseLoginStore;