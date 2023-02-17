import React, { useContext } from "react";
import ClassicInput from "../components/UI/inputs/ClassicInput";
import ClassicButton from "../components/UI/buttons/ClassicButton";
import { AuthContext } from "../context/context";

const Login = () => {
    const {loggedIn, setLoggedIn} = useContext(AuthContext);

    const login = event => {
        event.preventDefault();
        setLoggedIn(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>
            <form onSubmit={login}>
                <ClassicInput type="text" placeholder="Username"/>
                <ClassicInput type="password" placeholder="Password"/>
                <ClassicButton>Log in</ClassicButton>
            </form>
        </div>
    )
}

export default Login;