import { useContext } from "react";
import { UserContext } from "./context/UserContext";


const LoginPage = () => {

    const { user,setUser } = useContext(UserContext);
   

    return (
        <>
            <h2>Login page</h2>
            <hr />
            <pre>
                {
                    JSON.stringify(user, null,3)
                }
            </pre>

            <button 
                onClick={ ()=>setUser({ id:3423, name:'enrique', email:'enrique@google.com' }) }
                className="btn btn-primary"
                >
                set user
            </button>
        </>
    );
};

export default LoginPage;