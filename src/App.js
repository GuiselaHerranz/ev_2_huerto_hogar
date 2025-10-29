import logo from './logo.svg';
import './App.css';
import Barra from './Components/Navbar.js';
import FooterPincipal from './Components/Footer.js';
import ProductosDestacados from './Components/productos.js';
import Nosotros from './Components/Nosotros.js';
import CalculadoraHuerto from './Components/CalculadoraHuerto.js';
import Contacto from './Components/Contacto.js';
import Servicios from './Components/Servicios.js';
import BannerPrincipal from './Components/Banner.js';

function App() {
  return (
    <div className="App">
      <Barra />

      <div className="container mt-4">
        <BannerPrincipal/>
        <ProductosDestacados/>
        <CalculadoraHuerto/>
        <Servicios/>
        <Nosotros/>
        <Contacto/>
      </div>

      <FooterPincipal/>
    </div>
  );
}

export default App;
