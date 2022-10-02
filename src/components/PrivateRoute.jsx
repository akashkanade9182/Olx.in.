import {Navigate} from "react-router-dom"
import { AppContext } from "../AppContext/AppContext"
import {useContext} from "react"



const PrivateRoute=({children})=>{
    const{isAuth}=useContext(AppContext);


    if(!isAuth){
      return   <Navigate to="/login"/>
    }
    return children
    
}
export default PrivateRoute