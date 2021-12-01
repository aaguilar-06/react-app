import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/views/Login';
import Facturas from './components/views/Facturas';
import CrearUsuario from './components/views/CrearUsuario';

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/facturas" element={<Facturas />} />
               <Route path="/" element={<Login />} />
            </Routes>
         </Router>
      </div>
   );
}

export default App;
