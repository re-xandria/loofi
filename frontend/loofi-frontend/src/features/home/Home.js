import { UserContext } from "../auth/Store";
import { useEffect, useState, useContext } from "react";
import Navigation from "../../components/Navigation";

function Home() {

    const [token, setToken] = useContext(UserContext);

    return (
        <>
            <Navigation></Navigation>
            <div>
                <p>You are on Loofi's Home Screen.</p>
                {/*<p>{token.value}</p>*/}
            </div>
        </>
    );
}

export default Home;