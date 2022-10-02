import {useState} from "react"
import './Login.css';
import {useNavigate} from "react-router-dom"
import { AppContext } from "../AppContext/AppContext"
import {useContext} from "react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,Input,Container,Box,Flex, Button,Alert,AlertIcon,
    Heading
  } from '@chakra-ui/react'


const Login=()=>{
    const navigate=useNavigate()
    const{isAuth,setisAuth}=useContext(AppContext);
    const[email,setEmail]=useState("") ;
    const[password,setPassword]=useState("");
    const[error,seterror]=useState(false);
    const handleClick=()=>{
        if(email==="akashkanade235@gmail.com" &&password==="12345")
        {
            setisAuth(true);
            navigate("/")
        }else{
            seterror(true);
            setTimeout(()=>{
                seterror(false);
            },1000)
        }
    }
  
   
    const emailError = email === ''
    const passwordError = password === ''

    if(error)
    {
        return (
            <Alert status='error'>
            <AlertIcon />
            There was an error processing your request
          </Alert>
        )
    }
    return (
        <Box mt="40px">
        <Container className="containerBox" >
            <Heading>Log in</Heading>
        <FormControl isInvalid={emailError}>
      <FormLabel>Email</FormLabel>
      <Input
      name="email"
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      {!emailError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
    </FormControl>
    <FormControl isInvalid={passwordError}>
      <FormLabel>password</FormLabel>
      <Input
        type='text'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      {!passwordError ? (
        <FormHelperText>
          Enter the password you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>password is required.</FormErrorMessage>
      )}
    </FormControl>
    <Button className="loginbutton" onClick={handleClick}>Login</Button>
    </Container>
    </Box>
    )
}
export default Login;