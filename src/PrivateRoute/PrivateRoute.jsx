import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {

const {user} = useContext(AuthContext)

if(user?.email){

    return children
}
else {

    return <Navigate to="/login"></Navigate>
    
}

};

export default PrivateRoute;