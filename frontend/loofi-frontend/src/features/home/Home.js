import { UserContext } from "../auth/Store";
import { useEffect, useState, useContext } from "react";
import Navigation from "../../components/Navigation";

function Home() {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const [isChecked, setIsChecked] = useState(false);

        useEffect(() => {
        const timer = setTimeout(() => {
            const email = localStorage.getItem("email");
            const token = localStorage.getItem("authToken");
            if (email && token) setUserInfo({email:email, token:token});
            // console.log(userInfo)
        }, 100)
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            <Navigation isChecked={isChecked} setIsChecked={setIsChecked}></Navigation>
            <div>
                <p>You are on Loofi's Home Screen.</p>
                {/*<p>{token.value}</p>*/}
            </div>
        </>
    );
}

export default Home;