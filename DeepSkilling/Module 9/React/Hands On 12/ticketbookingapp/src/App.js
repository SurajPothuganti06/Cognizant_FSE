import { useState } from "react";

import Greeting from "./components/Greeting";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleLogin() {

        setIsLoggedIn(true);

    }

    function handleLogout() {

        setIsLoggedIn(false);

    }

    return (

        <div style={{ margin: "40px" }}>

            {

                isLoggedIn ?

                <LogoutButton onClick={handleLogout} />

                :

                <LoginButton onClick={handleLogin} />

            }

            <hr />

            <Greeting isLoggedIn={isLoggedIn} />

        </div>

    );

}

export default App;