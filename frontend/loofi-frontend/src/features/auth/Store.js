import React, {useState} from "react";

const initialState = {
    value: ''
};

export const UserContext = React.createContext();

const Store = ({children}) => {

    const [token, setToken] = useState(initialState);

    return (
        <UserContext.Provider value={[token, setToken]}>{children}</UserContext.Provider>
    )
}

export default Store;