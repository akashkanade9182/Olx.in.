import{Box,MenuList,MenuItem} from "@chakra-ui/react"
import {ArrowRightIcon} from "@chakra-ui/icons"
import{AppContext} from "../AppContext/AppContext"
import{useContext} from "react"
const styled={  _hover:{ bg: "blue.500", color: " white",borderRadius:"10px" },
_focus:{ boxShadow: "outline" }}
const Sidebar=()=>{
    const {
        location,setlocation,sorts,setsorts,filters,setfilters
    }=useContext(AppContext);
    return (
        <Box fontWeight={"normal"}  align="left" >
                    <Box  fontWeight={"bold"} color="black" pl='2' ><ArrowRightIcon/>Select Brand</Box>
         <Box marginBottom="50px">
       <Box onClick={()=>setfilters("BMW")} style={styled.hover} cursor="pointer" color="grey" pl='2' borderBottom="1px" >BMW</Box>
       <Box  cursor="pointer" color="grey" pl='2'  borderBottom="1px" >Mahindra</Box>
       <Box cursor="pointer" color="grey"  pl='2' borderBottom="1px" >Toyoto</Box>
       <Box cursor="pointer" color="grey"  pl='2' borderBottom="1px" >Hyundai</Box>
        </Box>
        <Box  color="grey" pl='2'fontWeight={"bold"} color="black"  ><ArrowRightIcon/>Sort by price</Box>
        <Box marginBottom="50px" >
        <Box cursor="pointer" pl='2' borderBottom="1px" >price low to high</Box>
       <Box cursor="pointer" pl='2' borderBottom="1px" >price high to low</Box>
       </Box>
       <Box  color="grey" pl='2'fontWeight={"bold"} color="black"><ArrowRightIcon/>Locations Results</Box>

       <Box  >
       <Box cursor="pointer" pl='2' borderBottom="1px" >BMW</Box>
       <Box cursor="pointer" pl='2' borderBottom="1px" >Mahindra</Box>
       <Box cursor="pointer"  pl='2'borderBottom="1px" >Toyoto</Box>
       <Box cursor="pointer"  pl='2'borderBottom="1px" >Hyundai</Box>
       </Box>
       
        </Box>

        

    )
}
export default Sidebar;