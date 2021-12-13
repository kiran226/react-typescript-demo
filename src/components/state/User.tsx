import {useState} from 'react'

type AuthUser={
    name: string,
    email: string
}

export const User = () => {
    const[user,setuser] = useState<AuthUser>({} as AuthUser);
    const handleLogin =() =>{
        setuser({
            name:'kiran',
            email:'kiran@gmail.com'
        })
    }
   
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            {/* <button onClick={handleLogout}>Logout</button> */}
            <h3>User name is {user.name} </h3>
            <h3>User email is {user.email} </h3>
        </div>
    )
}
