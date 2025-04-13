import { UserContext } from "../auth/Store";
import {useEffect, useState, useContext} from "react";

function Home() {

    const [token, setToken] = useContext(UserContext);

    return (
        <div>
            <p>You are on Loofi's Home Screen.</p>
            <p>{token.value}</p>
        </div>
    );
}

export default Home;