import { Flex,Container,Grid,GridItem,Image, Spacer,Box,Center,Text,Square } from '@chakra-ui/react'
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
    {
        path:"/addpost",
        title:"MyPost"
    },
 
    
]


const Navbar2=()=>{
    return (
        <Grid
        templateAreas={`"header header"`}
        gridTemplateRows={'50px'}
        gridTemplateColumns={'250px 1fr'}
      
        gap='4'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' bg='green.300' area={'header'}>
       <Box mt={"10px"}>
        <Flex bg='green.300'  align="center"  w="90%" margin="auto" location="center" height="40px" fontSize="15px" gap="10">

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
      </Box>
      </GridItem>
              </Grid>
      
    )

}
export default Navbar2;