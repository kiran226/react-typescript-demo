import {useState} from 'react'

export const Loggedin = () => {
    const [isloggedin,setIsLoggedin]= useState(true);

    const handleLogin=()=>{
        setIsLoggedin(false);
    }

    const handleLogout=()=>{
        setIsLoggedin(true);
    }
    return (
        <div>
            <button onClick={handleLogin}>Logged In</button>
            <button onClick={handleLogout}>Logged Out</button>
            <h2>User is {isloggedin ? 'logged in' : 'logged out'} </h2>
        </div>
    )
}
