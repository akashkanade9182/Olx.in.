import { Flex,Image, Spacer,Box,Center,Text,Square } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
    Input
    

  } from '@chakra-ui/react'
  import {ChevronDownIcon,SearchIcon,AddIcon,ChatIcon,} from "@chakra-ui/icons"
  import { IconButton,Wrap,WrapItem,Avatar } from '@chakra-ui/react'
  import {BellIcon,HamburgerIcon,AttachmentIcon} from "@chakra-ui/icons"
  import { AppContext } from "../AppContext/AppContext"
  import{useContext,useState} from "react"
import { Navigate,useNavigate } from 'react-router-dom'
import "./Navbar.css"
import axios from "axios"
const getdata=(value)=>{
  return axios.get(`https://thawing-anchorage-00134.herokuapp.com/api/post?category=${value}`)
}


  const Navbar=()=>{
  const navigate=useNavigate();
    const{location ,setlocation,user,data,setData}=useContext(AppContext);
    const selling=()=>{
      navigate("/addpost")
    };
    const seemypost=()=>{
      navigate("/mypost")
    }
    const handleChange=(e)=>{
       getdata(e.target.value).then((res)=>setData(res.data))
       .then((err)=>console.log(err))
        
        
        
    }

    return (
        <Flex justifyContent={"space-around"} padding="5px 5px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" 
        align="center" justify="space-around" color='grey'>
          <Box marginLeft="50px" width="50px" padding="5px 5px">
          <Image src="https://www.logosvgpng.com/wp-content/uploads/2020/10/olx-logo-vector.png" alt='Dan Abramov' /> 
          </Box>
         <Spacer width="100px"/>
         <Menu>
  {({ isOpen }) => (
    <>
      <MenuButton color="black" height="50px" width="250px" borderColor="black" borderWidth='2px' isActive={isOpen} as={Button} rightIcon={<ChevronDownIcon />}>
        {isOpen ? 'Close' : 'India'}
      </MenuButton>
      <MenuList  borderColor="black"  >
        <MenuItem onClick={() => setlocation("maharashtra")} color="black" >Maharashtra</MenuItem>
        <MenuItem color="black"onClick={() => setlocation("kerala")}>Kerala</MenuItem>
        <MenuItem color="black" onClick={() => setlocation("punjab")} >Punjab</MenuItem>

        <MenuItem color="black" onClick={() => setlocation("tamilnadu")} >TamilNadu</MenuItem>

      </MenuList>
      <Spacer/>
      <Input onChange={(e)=>handleChange(e)} height="40px" borderRadius="0" placeholder="search" width="400px" borderColor="black" borderWidth='2px' borderplaceholder='Basic usage' />
      <IconButton height="40px" bg="#004d40" borderRadius="0" aria-label='Search database' icon={<SearchIcon />} /> 
      <Spacer/>
      <BellIcon/>
      <Spacer/>
      <ChatIcon/>
      <Spacer/>
      <Button onClick={selling} height="45px" borderRadius="20px" border="2px" colorScheme='teal' variant='outline'>
      <AddIcon/>SELL</Button>   </>
  )}
</Menu>
<Spacer/>
<Box className="seemypost">
<AttachmentIcon  onClick={seemypost}/>
</Box>
<Spacer/>
<Menu marginLeft="10px">
  <MenuButton height="40px"  w="40px" padding={"3"}  as={Button} colorScheme='green'>
  <HamburgerIcon />
  </MenuButton>

  <MenuList>
    <MenuGroup textAlign={"center"} alignItems={"center"}  title='Profile'>
      <MenuItem ml="80px">
      <Wrap>
      <WrapItem >
    <Avatar size='xl' name='Segun Adebayo' src={user.image} />{' '}
  </WrapItem>
</Wrap>
      </MenuItem >
    
    </MenuGroup>
    <MenuDivider />
    <MenuGroup title={user.name}>
    </MenuGroup>
    <MenuGroup title={user.mobile}>
    </MenuGroup>
    <MenuGroup title={user.email}>
    </MenuGroup>
    <Button bg="green.300">Log Out</Button>
  </MenuList>
</Menu>



        </Flex>
    )

}
export default Navbar;