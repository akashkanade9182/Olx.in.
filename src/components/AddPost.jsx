import React from "react"
import axios from "axios"
import {Box, Heading,Alert,AlertTitle,AlertIcon,AlertDescription} from "@chakra-ui/react"
import { AppContext } from "../AppContext/AppContext"
import{useContext,useState} from "react"
import { } from "@chakra-ui/icons"
const getdata=({location,brand,category,price,title,postDate,description,address,image})=>{
    return axios.post(`https://thawing-anchorage-00134.herokuapp.com/api/mypost`,{
        location,brand,category,price,title,postDate,description,address,image
    })

}
const initstate={
    location:"",
    brand:"",
    category:"",
    price:"",
    title:"",
    postDate:"",
    description:"",
    address:"",
    image:""
};
const AddPost=()=>{
    const [data,setdata]=React.useState(initstate);
    const{location ,setlocation,user}=useContext(AppContext);
    const[state,setstate]=useState(false);
   
    const handleChange=(e)=>{
        const{name,value,type}=e.target;
        
        let val=type==="number"?Number(value):value;
    setdata({...data,[name]:val});
    }
       
 const handleClick=(e)=>{
    e.preventDefault();
    getdata(data).then((err)=>{
      console.log(err)
    })
    setstate(true);
    setTimeout(()=>{
      setstate(false);
    },4000

    )

    
    console.log(data);
 }
 if(state===true)
 {
  return (
    <Alert
  status='success'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
  textAlign='center'
  height='200px'
>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Post submitted!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
    Thanks for submitting your post. you will get responce soon.
  </AlertDescription>
</Alert>
  )
 }
    return (
    <Box padding={"40px"} w="lg" borderRadius={"15px"} align="center" margin={"auto"} mt="40px" border={"1px solid black"}>
        <Heading fontSize={"35px"}>Add your Post</Heading>
        <form marginTop="50px" class="row g-3">
  
 
 
  <div class="col-12">
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="text" name="title" onChange={(e)=>handleChange(e)} class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Upload file</label>
    <div class="col-sm-10">
      <input type="text" name="image" onChange={(e)=>handleChange(e)} class="form-control" id="inputEmail3"/>
    </div>
  </div>
<div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Brand</label>
    <div class="col-sm-10">
      <input type="text" name="brand" onChange={(e)=>handleChange(e)} class="form-control" id="inputEmail3"/>
    </div>
  </div>
  <div class="row">
  <div class="col">
    <input   name="price" onChange={(e)=>handleChange(e)} type="number" class="form-control" placeholder="price" aria-label="First name"/>
  </div>

  <div class="col-md-4">
    <select id="inputState" placeholder="category"  name="category" onChange={(e)=>handleChange(e)} class="form-select">
      <option selected>Category</option>
      <option value="cars">Cars</option>
      <option value="motarycle">Motarcycle</option>
      <option value="mobile">Mobile</option>
      <option value="furniture">Furniture</option>
      <option value="books">Books</option>
    </select>
  </div>
</div>
 
    <label for="inputAddress" class="form-label">Address</label>
    <input  name="address" onChange={(e)=>handleChange(e)} type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Description</label>
    <input height={"300px"} name="description" onChange={(e)=>handleChange(e)} type="text" class="form-control" id="inputAddress2" placeholder="enter product deatils......."/>
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input  name="city" onChange={(e)=>handleChange(e)} type="text" class="form-control" id="inputCity"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select name="location" id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option value="maharashtra">Maharashtra</option>
      <option value="kerala">Kerala</option>
      <option value="punjab">Punjab</option>
      <option value="tamilNadu">TamilNadu</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input  name="zip" onChange={(e)=>handleChange(e)} type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
   
  </div>
  <div class="col-12">
    <button onClick={(e)=>handleClick(e)} type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>
  
    </Box>
    )

}
export default AddPost;
{/* <input  onChange={handleChange} name="location" placeholder="location" type="file" />
<input   onChange={handleChange} name="brand" placeholder="brand" type="text" />
<input onChange={handleChange} name="category" placeholder="category" type="text" />
<input onChange={handleChange} name="price" placeholder="price" type="number" />
<input onChange={handleChange} name="title" placeholder="title" type="text" />
<input onChange={handleChange} name="postDate"  type="date" />
<input onChange={handleChange} name="description" placeholder="description" type="text" />
<input onChange={handleChange} name="address" placeholder="address" type="text" />
<input onChange={handleChange} name="image" placeholder="image" type="text" />
 <button onClick={(e)=>handleClick(e)}>Submit</button> */}