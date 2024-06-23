import { Navigate } from "react-router-dom"

export const ProtectedRoutes = ({children})=>{
    const currentUser = localStorage.getItem('user');
    console.log(currentUser);
    if(currentUser){
        return children
    }
    else{
        return <Navigate to='/login'/>
    }
}