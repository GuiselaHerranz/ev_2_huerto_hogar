import logo from './logo.svg';
import './App.css';
import Barra from './Components/Navbar.js';
import Ban from './Components/Banner.js';
import FooterPincipal from './Components/Footer.js';
import ProductosDestacados from './Components/productos.js';
import Nosotros from './Components/Nosotros.js';
import CalculadoraHuerto from './Components/CalculadoraHuerto.js';
import Contacto from './Components/Contacto.js';

function App() {
  return (
    <div className="App">
      <Barra />

      <div className="container mt-4">
        <Ban />
        <ProductosDestacados/>
        <Nosotros/>
        <CalculadoraHuerto/>
        <Contacto/>
      </div>

      <FooterPincipal/>
    </div>
  );
}

export default App;
