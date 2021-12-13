import { useContext } from "react";
import { UserContext } from "./UserContext";

export const UserDetails = () => {

    const userContext = useContext(UserContext);

    const handleLogin=()=>{
        if(userContext){
            userContext.setUser({
                name: 'Kiran Gandikota',
                email :'kiran@gmail.com'
            })
        }
    }

    const handleLogout=()=>{
        if(userContext){
            userContext.setUser(null);
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Logged in</button>
            <button onClick={handleLogout}>Logged out</button>
            <h2>user name is {userContext?.user?.name}</h2>
            <h2>user email is {userContext?.user?.email}</h2>
        </div>
    )
}
