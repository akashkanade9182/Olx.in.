import { Flex,Container,Image, Spacer,Box,Center,Text,Square } from '@chakra-ui/react'
import {NavLink} from "react-router-dom"
const links=[
    {
        path:"/",
        title:"Home"
    },
    {
        path:"/cars",
        title:"Cars"
    },
    {
        path:"/motarcycle",
        title:"MotarCycles"
    },
    {
        path:"/mobile",
        title:"Mobiles"
    },
    {
        path:"/mobile",
        title:"Furniture"
    },
    {
        path:"/mobile",
        title:"House and Aprtments"
    },
    {
        path:"/mobile",
        title:"other vehicles"
    },
    {
        path:"/mobile",
        title:"House on Rent"
    },
    
]


const Navbar2=()=>{
    return (
       
        <Flex align="center"  w="90%" margin="auto" location="center" height="40px" fontSize="15px" gap="10">

        {
            links.map((item)=>(
                <Box  _hover={{ bg: "blue.500", color: " white",borderRadius:"10px" }}
                _focus={{ boxShadow: "outline" }}
               p='1' height="fit-content" fontWeight={"bold"}>
                <NavLink to={item.path}>{item.title}</NavLink>
              </Box>
             
            ))
        }
      
       
      </Flex>
      
    )

}
export default Navbar2;