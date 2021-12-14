import { Login } from './Login'
import { ProfileProps } from './Profile'
type PrivateProps ={
    isloggedin: boolean,
    component : React.ComponentType<ProfileProps>

}

export const Private = ({isloggedin,component: Component}: PrivateProps) => {
    if(isloggedin){
        return <Component name="kiran" />
    }
    else{
        return <Login/>
        }
}
