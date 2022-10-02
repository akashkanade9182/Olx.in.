import Sidebar from "../components/Sidebar"
import Card from "../components/Card"
import {DragHandleIcon} from "@chakra-ui/icons"
import {useState,useEffect} from "react"
import { Grid,Box,Heading,VStack,Stack, GridItem } from '@chakra-ui/react'
import axios from "axios"
import{AppContext} from "../AppContext/AppContext"
import{useContext} from "react"
import {useNavigate} from "react-router-dom"
import {ArrowRightIcon} from "@chakra-ui/icons"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'



const getdata=(params={})=>{
    return axios.get(`https://thawing-anchorage-00134.herokuapp.com/api/post?category=cars`,{
        params:{
            location:params.location,
            brand:params.brand,
            _sort:params.sort,
            _order:params.order,
        }
    });
}







const Cars=()=>{
    const navigate=useNavigate();
    const {
        location,setlocation,sorts,setsorts,filters,setfilters,setData,data
    }=useContext(AppContext);
//     const[sorts,setsorts]=useState("");
//     const [filters,setfilter]=useState("");
 
//  const[location,setlocation]=useState("");

    const fetchdata=(location)=>{
       getdata({location,sort:"price",order:"asc"}).then((res)=>setData(res.data));
    }
    const fetchsortaccendting=()=>{
        getdata({location,sort:"price",order:"asc"}).then((res)=>setData(res.data));
    }
    const fetchsortdesendting=()=>{
        getdata({location,sort:"price",order:"desc"}).then((res)=>setData(res.data));
    }
    const fetchfilterting=(brand)=>{
        getdata({brand,location,sort:"price",order:"asc"}).then((res)=>setData(res.data));
        console.log("work");
    }
const handleClick=(id)=>{
    navigate(`/cars/${id}`)
}
    useEffect(()=>{
      fetchdata(location);
    console.log(filters);
    console.log(location)
    },[filters,location])
    if(data.length===0)
    {
        return 
    }
    return (
        <Grid
        templateAreas={`
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={' 1fr '}
        gridTemplateColumns={'150px 1fr'}
        h='200px'
        gap='1'
        color='blackAlpha.700'
        fontWeight='bold'
      >
     
        <GridItem w="260px" pl='2' area={'nav'}>
        <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}  fontWeight={"normal"}  align="left" >
                    <Box  fontWeight={"bold"} color="black" pl='2' ><ArrowRightIcon/>Select Brand</Box>
         <Box marginBottom="50px">
       <Box onClick={()=>fetchfilterting("BMW")}  cursor="pointer" color="grey" pl='2' borderBottom="1px" >BMW</Box>
       <Box onClick={()=>fetchfilterting("MAHINDRA")}  cursor="pointer" color="grey" pl='2'  borderBottom="1px" >Mahindra</Box>
       <Box onClick={()=>fetchfilterting("TOYOTO")}  cursor="pointer" color="grey"  pl='2' borderBottom="1px" >Toyoto</Box>
       <Box onClick={()=>fetchfilterting("HYUNDAI")}  cursor="pointer" color="grey"  pl='2' borderBottom="1px" >Hyundai</Box>
        </Box>
        <Box  color="grey" pl='2'fontWeight={"bold"} color="black"  ><ArrowRightIcon/>Sort by price</Box>
        <Box marginBottom="50px" >
        <Box  onClick={()=>fetchsortaccendting()}  cursor="pointer" pl='2' borderBottom="1px" >price low to high</Box>
       <Box onClick={fetchsortdesendting} cursor="pointer" pl='2' borderBottom="1px" >price high to low</Box>
       </Box>
       <Box  color="grey" pl='2'fontWeight={"bold"} color="black"><ArrowRightIcon/>Locations Results</Box>

       <Box  >
       <Box cursor="pointer" pl='2' borderBottom="1px" >BMW</Box>
       <Box cursor="pointer" pl='2' borderBottom="1px" >Mahindra</Box>
       <Box cursor="pointer"  pl='2'borderBottom="1px" >Toyoto</Box>
       <Box cursor="pointer"  pl='2'borderBottom="1px" >Hyundai</Box>
       </Box>
       
        </Box>
        </GridItem>
        <GridItem marginLeft="100px" height={"1200px"} w="1000px"  pl='2' area={'main'}>
         <Grid templateColumns='repeat(4, 1fr)' gap="4">
            {
               data.map((item)=>(
                <Card handleClick={handleClick} key={item.id} {...item}/>
               ))
            }
            </Grid>
         
        </GridItem>
       
      </Grid>
    )
}
export default Cars;