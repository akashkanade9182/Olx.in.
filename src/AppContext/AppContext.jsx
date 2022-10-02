import {createContext,useState} from "react"




export const AppContext=createContext();

const AppContextProvider=({children})=>{
    const[location,setlocation]=useState(null);
    const[data,setData]=useState([])
    const[sorts,setsorts]=useState("");
    const [filters,setfilters]=useState("");
    const[search,setsearch]=useState("")
    const[post,setPost]=useState([]);
    const[isAuth,setisAuth]=useState(false);
    const [user,setuser]=useState({
        name:"akash mahadeo kaande",
        image:"https://images.lifestyleasia.com/wp-content/uploads/sites/7/2022/02/28155940/The-Batman-1.jpg",
        mobile:"8668696097",
        email:"akashkanade235@gmail.com"
    });

    const value={
        location,setlocation,sorts,setsorts,filters,setfilters,post,setPost
        ,user,setuser,isAuth,setisAuth,search,setsearch,setData,data
    }

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
        )

    
}
export default AppContextProvider;