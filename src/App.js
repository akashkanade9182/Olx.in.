import logo from './logo.svg';
import './App.css';
import AddPost from "./components/AddPost.jsx"
function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <AddPost/>
       
    </div>
  );
}

export default App;
