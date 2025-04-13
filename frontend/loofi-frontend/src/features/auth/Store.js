import React, {useState} from "react";

const initialState = {
    email: '',
    token: '',
};

export const UserContext = React.createContext();

const Store = ({children}) => {

    const [userInfo, setUserInfo] = useState(initialState);

    return (
        <UserContext.Provider value={[userInfo, setUserInfo]}>{children}</UserContext.Provider>
    )
}

export default Store;