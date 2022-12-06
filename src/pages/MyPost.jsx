import axios from "axios"
import {Container,Box,Flex} from "@chakra-ui/react"
import { useEffect,useState } from "react";
import "./mypost.css"
import PostRow from "../components/PostRow";


const getdata=()=>{
    return axios.get(`https://olxapi.onrender.com/mypost`);
}
const deletedata=(id)=>{
    return axios.delete(`https://olxapi.onrender.com/mypost/${id}`)
}






const MyPost=()=>{
    const [data,setdata]=useState([]);

      const handleClick=(id)=>{
        deletedata(id)
      
      }

    useEffect(()=>{
        getdata().then((res)=>setdata(res.data))
        .then((err)=>console.log(err))

    },[data])
    if(data.length===0)
    {
        return (<Box className="box">
            <Container className="containerbox">
                <h1>No Data Found</h1>
            </Container>
        </Box>)
    }

    return (
        <Box className="box">
   
        <Container>
              
            <table  width="1000px" className="tablebox"  class="table table-striped">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Photo</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>(
                            <PostRow key={item.id} No={index+1} handleClick={handleClick} {...item}/>
                        ))
                    }

                </tbody>
            </table>
    

            </Container>
        </Box>
        
    )

}
export default MyPost;