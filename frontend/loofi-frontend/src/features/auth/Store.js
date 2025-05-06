import React, {useState} from "react";

const initialState = {
    email: '',
    token: '',
    role: 'user'
};

export const UserContext = React.createContext();

const Store = ({children}) => {

    const [userInfo, setUserInfo] = useState(() => {
        const storedEmail = localStorage.getItem("email");
        const storedToken = localStorage.getItem("authToken");
        const storedRole = localStorage.getItem("role");
        return storedEmail && storedToken
            ? {email: storedEmail, token: storedToken, role: storedRole}
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