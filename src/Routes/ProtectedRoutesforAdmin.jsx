import { Navigate } from "react-router-dom";

export const ProtectedRoutesForAdmin = ({children})=>{
    const admin = JSON.parse(localStorage.getItem('user'))
    console.log(admin.user.email);
    if(admin.user.email === 'admin@gmail.com'){
        return children
    }else{
        return <Navigate to= '/login'/>
    }
}