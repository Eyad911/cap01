import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import { Nav } from "./components/Nav";
import { Game } from "./components/Game";



function App() {
  return (
    <div className="App">
      <Nav/>
      <Game/>
      <Home/>
    </div>
  );
}

export default App;
