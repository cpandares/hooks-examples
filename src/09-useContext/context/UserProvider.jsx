import { useState } from "react";
import { UserContext } from "./UserContext";

/* const user = {
    id:123,
    name:'cesar',
    email:'cesar@google.com'
} */

const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState()
    return (
        <UserContext.Provider value={{  user, setUser }}>
            { children }
        </UserContext.Provider>
    );
};

export default UserProvider;