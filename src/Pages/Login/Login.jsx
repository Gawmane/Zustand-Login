import { useForm } from "react-hook-form"
import appService from "../../Appservice/App.service";
import UseLoginStore from "./UseLoginStore";

const Login = () => {

    const { setLoggedIn } = UseLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
    }));

    const { register, handleSubmit } = useForm();

    const onSubmit = (submitData) => {
        async function fecthResults() {
            try {
                const response = await appService.login(submitData.username, submitData.password);
                if (response.data) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                    setLoggedIn();
                }
            }
            catch (error) {
                console.log(error);
            }
        }
        fecthResults();
    }
    return (
        <>
            {/* Laver form der kan register brugernavn og adgangskode */}
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* //Spret oparter */}
                <input type="text" {...register("username", { required: "Brugernavn er påkrævet " })} autoComplete="username" placeholder="Brugernavn" />
                <input type="password" {...register("password", { required: "Password er påkrævet " })} autoComplete="password" placeholder="Password" />
                <button>Login </button>
            </form>

        </>
    );
}

export default Login;
