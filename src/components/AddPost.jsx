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
        setdata(...data,{
            [name]:val
        })
    }
       
 const handleClick=(e)=>{
    e.preventDefault();
    getdata(data)
 }
    return (
    <div>
      <input onChange={handleChange} name="location" placeholder="location" type="text" />
      <input  name="brand" placeholder="brand" type="text" />
      <input  name="category" placeholder="category" type="text" />
      <input  name="price" placeholder="price" type="number" />
      <input  name="title" placeholder="title" type="text" />
      <input  name="postDate"  type="date" />
      <input  name="description" placeholder="description" type="text" />
      <input  name="address" placeholder="address" type="text" />
      <input  name="image" placeholder="image" type="text" />
       <button onClick={handleClick}>Submit</button>
    </div>
    )

}
export default AddPost;