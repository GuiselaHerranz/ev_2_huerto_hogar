import logo from './logo.svg';
import './App.css';
import Barra from './Components/Navbar';
import Ban from './Components/Banner.js';

function App() {
  return (
    <div className="App">
      <Barra/>

      <div className='container'>
        <Ban/>

      </div>
    </div>
  );
}

export default App;
