import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';

import PrincipalPage from './pages/PrincipalPage';
// import NovedadesPage from './pages/NovedadesPage';
import ContactoPage from './pages/ContactoPage';
import Servicios from './pages/Servicios';
import Hemeroteca from './pages/Hemeroteca';
import ServicioPrestamo from './pages/ServicioPrestamo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          {/* <Route path="/novedades" element={<NovedadesPage />} /> */}
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/Hemeroteca" element={<Hemeroteca />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ServicioPrestamo" element={<ServicioPrestamo />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;