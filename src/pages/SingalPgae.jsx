import Sidebar from "../components/Sidebar"
import Card from "../components/Card"
import {DragHandleIcon} from "@chakra-ui/icons"
import {useState,useEffect} from "react"
import { Grid,Container,Text,Image,Flex,Box,Heading,VStack,Stack, GridItem } from '@chakra-ui/react'
import axios from "axios"
import{AppContext} from "../AppContext/AppContext"
import{useContext} from "react"
import {useNavigate} from "react-router-dom"
import {ArrowRightIcon} from "@chakra-ui/icons"
import{useParams} from "react-router-dom"
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
  } from '@chakra-ui/react'

  
const getdata=(id)=>{
    return axios.get(`http://localhost:3000/post/${id}`)
}


const SingalPage=()=>{
    const{id}=useParams();
    const [data,setdata]=useState(null);
    const fetchdata=(id)=>{
      getdata(id).then((res)=>setdata(res.data));
    }
    useEffect(()=>{
        fetchdata(id);
        console.log(data);
    },[id]);
    return (
        // <Container mt={"4"} w={"100%"} bg={"green.400"}>
            <Flex textAlign={"left"} margin={"auto"} mt={"4"} w={"90%"} gap="5">
            <Box w={"full"}height="auto">
              <Image w={"full"} src={data.image}/>
            </Box>
            <Box textAlign={"left"} w={"full"}>
                <VStack textAlign={"left"}>
                  <Heading align={"left"} fontFamily={"Time-New-Romen"}>Title-{data.title}</Heading>
                  <Text fontSize={"large"}>Price-{data.price}</Text>
                  <Text fontSize={"large"}>Brand-{data.brand}</Text>
                  <Text fontSize={"large"}>location-{data.location}</Text>
                  <Text fontSize={"large"}>Post-Date-{data.postDate}</Text>
                  <Text fontSize={"large"}>Description-{data.description}</Text>

                  <Box w="500px" p={"15px"}borderStyle={"dashed"} borderWidth={"1px"}   borderColor="black" borderRadius={"20px"}>
                  <UnorderedList>
  <ListItem>Contact details</ListItem>
  <ListItem>address-{data.address}</ListItem>
  <ListItem>mobileNo-*********</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList>
                  </Box>

                </VStack>
     
            </Box>
            </Flex>

        // </Container>
    )
}
export default SingalPage;