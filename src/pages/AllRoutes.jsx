import {Routes,Route} from "react-router-dom"
import Home from "../components/Home"
import SingalPage from "./SingalPgae"
import Cars from "./Cars"
import Mobile from "./Mobile"
import MotarCycle  from "./MotarCycle"
import AddPost from "../components/AddPost"
const AllRoutes=()=>{
    
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/cars" element={<Cars/>}></Route>
            <Route path="/cars/:id" element={<SingalPage/>}></Route>

            <Route path="/motarcycle" element={<MotarCycle/>}></Route>
            <Route path="/motarcycle/:id" element={<SingalPage/>}></Route>

            <Route path="/mobile" element={<Mobile/>}></Route>
            <Route path="/mobile/:id" element={<SingalPage/>}></Route>

            <Route path="/addpost" element={<AddPost/>}></Route>





        </Routes>
    )
}
export default AllRoutes;