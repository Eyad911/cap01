import './App.css';
import { Home } from './components/Home';
import { Nav } from "./components/Nav";
import { Game } from "./components/Game";
import {Instruction} from "./components/Instruction"
import { Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Nav/>
      
      <Routes>
      <Route exact path='/' element ={<Home />}/>
      <Route exact path='/Game' element ={<Game />}/>
      <Route exact path='/Instruction' element ={< Instruction/>}/>
      
      </Routes>
      
    </div>
  );
}

export default App;
