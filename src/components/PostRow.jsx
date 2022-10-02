import {Button} from "@chakra-ui/react"
import "./Navbar.css"
const PostRow=({image,title,category,id,No,handleClick})=>{

    return (
        <tr  class={No%2===0?"table-danger":"table-info"}>
            <td>{No}</td>
            <td>
                <img src={image} alt="error" />
            </td>
            <td>{title}</td>
            <td>{category}</td>
            <td><Button className="btn" onClick={()=>handleClick(id)}>Delete</Button></td>


        </tr>
    )

}
export default PostRow;