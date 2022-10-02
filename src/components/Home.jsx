import Navbar2 from "./Navbar2"
import Sidebar from "./Sidebar"
import Card from "./Card"

import {DragHandleIcon} from "@chakra-ui/icons"
import {useState,useEffect} from "react"
import { Grid,Box,Heading,VStack, GridItem } from '@chakra-ui/react'
import axios from "axios"

const getcars=()=>{
    return axios.get(`https://thawing-anchorage-00134.herokuapp.com/api/post?id_gte=4&id_lte=7`)
}
const getmotarcycle=()=>{
    return axios.get(`https://thawing-anchorage-00134.herokuapp.com/api/post?id_gte=18&id_lte=21`)
}
const getMobile=()=>{
    return axios.get(`https://thawing-anchorage-00134.herokuapp.com/api/post?id_gte=30&id_lte=33`)
}

const Home=()=>{
    const[cars,setcars]=useState([]);
    const[cycle,setcycle]=useState([]);
    const[mobile,setMobile]=useState([]);
    const handleCars=()=>{
        getcars().then((res)=>setcars(res.data));
    }
    const handlecycle=()=>{
        getmotarcycle().then((res)=>setcycle(res.data));
    }
    const handlemobile=()=>{
        getMobile().then((res)=>setMobile(res.data));
    }
    useEffect(()=>{
      handleCars();
      handlecycle();
     handlemobile();
      console.log(cars);
    },[])


    return (
      <Box mt={"5px"}>
        <Grid
        templateAreas={`"header header"
                        "nav main"
                        "nav footer"`}
        gridTemplateRows={'0px 1fr 30px'}
        gridTemplateColumns={'250px 1fr'}
       
        gap='4'
        color='blackAlpha.700'
        fontWeight='bold'
      >
        <GridItem pl='2' mt={"0px"} bg='green.300' area={'header'}>
        
        </GridItem>
        <GridItem w="300px" pl='2'  area={'nav'}>
          <Sidebar/>
        </GridItem>
        <GridItem marginLeft="100px" h="auto" w="1000px"  pl='2'  area={'main'}>
            <VStack alignItem="left">

            <Heading textAlign="left" fontFamily={"Time-New-Romen"} color="black" fontSize={"lg"}>Cars</Heading>
          <Grid templateColumns='repeat(4, 1fr)' gap={6}>
            {
                cars.map((item)=>(
                 <Card key={item.id} {...item}/>
                ))
            }
          </Grid>
          </VStack>
          <VStack alignItem="left">

<Heading  mt={"50px"} fontFamily={"Time-New-Romen"} color="black" fontSize={"lg"}>Motarcycle</Heading>
<Grid templateColumns='repeat(4, 1fr)' gap={6}>
{
    cycle.map((item)=>(
     <Card key={item.id} {...item}/>
    ))
}
</Grid>
</VStack>
<VStack alignItem="left">

<Heading  mt={"50px"} fontFamily={"Time-New-Romen"} color="black" fontSize={"lg"}>Mobile</Heading>
<Grid templateColumns='repeat(4, 1fr)' gap={6}>
{
    mobile.map((item)=>(
     <Card key={item.id} {...item}/>
    ))
}
</Grid>
</VStack>
        </GridItem>
        <GridItem pl='2' bg='blue.300' area={'footer'}>
          Footer
        </GridItem>
      </Grid>
      </Box>
    )
}
export default Home;