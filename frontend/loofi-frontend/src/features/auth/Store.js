import React, {useEffect, useState} from "react";

const initialState = {
    email: '',
    token: '',
};

export const UserContext = React.createContext();

const Store = ({children}) => {

    const [userInfo, setUserInfo] = useState(() => {
        const storedEmail = localStorage.getItem("email");
        const storedToken = localStorage.getItem("authToken");
        return storedEmail && storedToken
            ? { email: storedEmail, token: storedToken }
            : initialState;
    });

    const clearUserInfo = () => {
        return setUserInfo(initialState);
    };

    return (
        <UserContext.Provider value={[userInfo, setUserInfo, clearUserInfo]}>{children}</UserContext.Provider>
    )
}

export default Store;