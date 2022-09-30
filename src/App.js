import logo from './logo.svg';
import './App.css';
import AddPost from "./components/AddPost.jsx"
import Navbar from "./components/Navbar.jsx"
import Navbar2 from "./components/Navbar2.jsx"
import Home from "./components/Home"
import Card from "./components/Card"
import AllRoutes from "./pages/AllRoutes"
import {ChakraProvider} from "@chakra-ui/react"
function App() {
  return (
    <div className="App">
        <ChakraProvider>
        <Navbar/>
        <Navbar2/>
        <AllRoutes/>
        {/* <Home/> */}
        {/* <AddPost/> */}
        </ChakraProvider>
       
    </div>
  );
}

export default App;
