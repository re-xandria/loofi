import {useLocation} from "react-router-dom";
import Navigation from "../../components/Navigation";
import {useState} from "react";

function UserSearch() {

    const location = useLocation();
    const results = location.state?.results;
    const [isChecked, setIsChecked] = useState(true);

    console.log("ComponentName:", { isChecked, setIsChecked });

    return(
        <>
            <Navigation isChecked={isChecked} setIsChecked={setIsChecked}></Navigation>
            <h1>Viewing results</h1>
            <div>
                {results[0] ? (
                    results.map((item, idx) => <p key={idx}>{item.email}</p>)
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </>
    )
}

export default UserSearch;