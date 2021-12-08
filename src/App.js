import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Facturas from './components/views/Facturas';
import CrearFacturas from './components/views/CrearFacturas';
import CrearImpuesto from './components/views/CrearImpuesto';
import CrearReporte from './components/views/CrearReporte';
import CrearRevision from './components/views/CrearRevision';
import CrearSubsidio from './components/views/CrearSubsidio';

import ListaImpuestos from './components/views/ListaImpuestos';
import ListaReportes from './components/views/ListaReportes';
import ListaRevisiones from './components/views/ListaRevisiones';
import ListaSubsidios from './components/views/ListaSubsidios';
import ListaUsuarios from './components/views/ListaUsuarios';

import FacturasUsuario from './components/views/FacturasUsuario';

import Register from './components/views/Register';
import Login from './components/views/Login';

import CrearUsuario from './components/views/CrearUsuario';

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/facturas" element={<Facturas />} />
               <Route path="/crear_factura" element={<CrearFacturas />} />
               <Route path="/crear_impuesto" element={<CrearImpuesto />} />
               <Route path="/crear_reporte" element={<CrearReporte />} />
               <Route path="/crear_revision" element={<CrearRevision />} />
               <Route path="/crear_subsidio" element={<CrearSubsidio />} />

               <Route path="/lista_impuestos" element={<ListaImpuestos />} />
               <Route path="/lista_reportes" element={<ListaReportes />} />
               <Route path="/lista_revisiones" element={<ListaRevisiones />} />
               <Route path="/lista_subsidios" element={<ListaSubsidios />} />
               <Route path="/lista_usuarios" element={<ListaUsuarios />} />

               <Route path="/facturas_usuario" element={<FacturasUsuario />} />

               <Route path="/registro" element={<Register />} />
               <Route path="/" element={<Login />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
