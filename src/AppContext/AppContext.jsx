import {createContext,useState} from "react"




export const AppContext=createContext();

const AppContextProvider=({children})=>{
    const[location,setlocation]=useState(null);
    const[sorts,setsorts]=useState("");
    const [filters,setfilters]=useState("");

    const value={
        location,setlocation,sorts,setsorts,filters,setfilters
    }

    return (
        <AppContext.Provider value={value}>{children}</AppContext.Provider>
        )

    
}
export default AppContextProvider;