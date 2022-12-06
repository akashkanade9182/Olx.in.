import Sidebar from "../components/Sidebar"
import Card from "../components/Card"
import {DragHandleIcon} from "@chakra-ui/icons"
import {useState,useEffect} from "react"
import { Grid,Box,Heading,VStack,Stack, GridItem } from '@chakra-ui/react'
import axios from "axios"
import{AppContext} from "../AppContext/AppContext.jsx"
import{useContext} from "react"
import {ArrowRightIcon} from "@chakra-ui/icons"
import {useNavigate} from "react-router-dom"
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
  } from '@chakra-ui/react'


const getdata=(params={})=>{
    return axios.get(`https://olxapi.onrender.com/post?category=motarcycle`,{
        params:{
            location:params.location,
            brand:params.brand,
            _sort:params.sort,
            _order:params.order,
        }
    });
}







const MotarCycle=()=>{
    const navigate=useNavigate();

    const {
        location,setlocation,data,setData,sorts,setsorts,filters,setfilters
    }=useContext(AppContext);
//     const[sorts,setsorts]=useState("");
//     const [filters,setfilter]=useState("");
    // const[data,setData]=useState([]);
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
        navigate(`/motarcycle/${id}`)
    }

    useEffect(()=>{
      fetchdata(location);
    console.log(filters);
    console.log(location)
    },[filters,location])
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
       <Box onClick={()=>fetchfilterting("BAJAJ")}  cursor="pointer" color="grey" pl='2' borderBottom="1px" >Bajaj</Box>
       <Box onClick={()=>fetchfilterting("YAMAHA")}  cursor="pointer" color="grey" pl='2'  borderBottom="1px" >Yamaha</Box>
       <Box onClick={()=>fetchfilterting("TVS")}  cursor="pointer" color="grey"  pl='2' borderBottom="1px" >Tvs</Box>
       <Box onClick={()=>fetchfilterting("hONDA")}  cursor="pointer" color="grey"  pl='2' borderBottom="1px" >Honda</Box>
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
                <Card  handleClick={handleClick} key={item.id} {...item}/>
               ))
            }
            </Grid>
         
        </GridItem>
       
      </Grid>
    )
}
export default MotarCycle;