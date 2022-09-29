import React from "react"
import axios from "axios"


const getdata=({location,brand,category,price,title,postDate,description,address,image})=>{
    return axios.post(`http://localhost:3000/post`,{
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
   
    const handleChange=(e)=>{
        const{name,value,type}=e.target;
        
        let val=type==="number"?Number(value):value;
    setdata({...data,[name]:val});
    }
       
 const handleClick=(e)=>{
    e.preventDefault();
    getdata(data)
    console.log(data);
 }
    return (
    <div>
      <input  onChange={handleChange} name="location" placeholder="location" type="file" />
      <input   onChange={handleChange} name="brand" placeholder="brand" type="text" />
      <input onChange={handleChange} name="category" placeholder="category" type="text" />
      <input onChange={handleChange} name="price" placeholder="price" type="number" />
      <input onChange={handleChange} name="title" placeholder="title" type="text" />
      <input onChange={handleChange} name="postDate"  type="date" />
      <input onChange={handleChange} name="description" placeholder="description" type="text" />
      <input onChange={handleChange} name="address" placeholder="address" type="text" />
      <input onChange={handleChange} name="image" placeholder="image" type="text" />
       <button onClick={(e)=>handleClick(e)}>Submit</button>
    </div>
    )

}
export default AddPost;