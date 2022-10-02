import {Routes,Route} from "react-router-dom"
import Home from "../components/Home"
import SingalPage from "./SingalPgae"
import Cars from "./Cars"
import Mobile from "./Mobile"
import MotarCycle  from "./MotarCycle"
import AddPost from "../components/AddPost"
import MyPost from "./MyPost"
import Login from "./Login"
import PrivateRoute from "../components/PrivateRoute"
const AllRoutes=()=>{
    
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cars" element={<PrivateRoute ><Cars/></PrivateRoute>}></Route>
            <Route path="/cars/:id" element={<PrivateRoute ><SingalPage/></PrivateRoute>}></Route>

            <Route path="/motarcycle" element={<PrivateRoute ><MotarCycle/></PrivateRoute>}></Route>
            <Route path="/motarcycle/:id" element={<PrivateRoute ><SingalPage/></PrivateRoute>}></Route>

            <Route path="/mobile" element={<PrivateRoute ><Mobile/></PrivateRoute>}></Route>
            <Route path="/mobile/:id" element={<PrivateRoute ><SingalPage/></PrivateRoute>}></Route>

            <Route path="/addpost" element={<PrivateRoute ><AddPost/></PrivateRoute>}></Route>
            <Route path="/mypost" element={<PrivateRoute ><MyPost/></PrivateRoute>}></Route>
            <Route path="/login" element ={<Login/>}></Route>





        </Routes>
    )
}
export default AllRoutes;