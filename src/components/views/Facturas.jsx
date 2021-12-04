import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';
import AdminLeftBar from '../partials/AdminLeftBar';

import { Link } from 'react-router-dom';

function Facturas({ user }) {
   const [listaFacturas, setListaFacturas] = useState([]);
   const [userData, setUserData] = useState({
      id: 23,
      nombreUsuario: 'Andres Felipe',
      rol: 'admin',
   });

   useEffect(() => {
      setListaFacturas([
         {
            factura: 12344232,
            periodo: 202111,
            fecha_venc: '2021-12-10',
            poliza: 12412,
            valor: 321423,
            estado: 'pendiente',
            nit: 123456,
            titular: 'Carlos Galindo Sierra',
            predio: 532342,
            direccion: 'Cra 43 # 82 - 115',
         },
         {
            factura: 121346452,
            periodo: 202111,
            fecha_venc: '2021-12-10',
            poliza: 12412,
            valor: 221590,
            estado: 'pendiente',
            nit: 73007889,
            titular: 'Carlos Manuel Guerra',
            predio: 532355,
            direccion: 'Cra 30 # 11 - 51',
         },
      ]);
   }, []);

   return (
      <div className="wrapper">
         <UserTopNav />

         <AdminLeftBar
            nombreUsuario={userData.nombreUsuario}
            rolUsuario={userData.rol}
         />

         <div className="content-wrapper">
            <section className="content-header">
               <div className="container-fluid">
                  <div className="row mb-2">
                     <div className="col-sm-6">
                        <h1>Gestión de facturas</h1>
                     </div>
                     <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                           <li className="breadcrumb-item">
                              <a href="#">Inicio</a>
                           </li>
                           <li className="breadcrumb-item active">
                              Administradores
                           </li>
                        </ol>
                     </div>
                  </div>
               </div>
            </section>

            <section className="content">
               <div className="container-fluid">
                  <div className="row">
                     <div className="col-12">
                        <div className="card">
                           <div className="card-header"></div>
                           <div className="card-body">
                              <table
                                 id="example1"
                                 className="table table-bordered table-striped"
                              >
                                 <thead>
                                    <tr>
                                       <th>Factura</th>
                                       <th>Periodo</th>
                                       <th>F.Venc</th>
                                       <th>P&oacute;liza</th>
                                       <th>Valor</th>
                                       <th>Estado</th>
                                       <th>CC/NIT</th>
                                       <th>Titular</th>
                                       <th>Predio</th>
                                       <th>Dirección</th>
                                       <th>Editar</th>
                                       <th>Eliminar</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    {listaFacturas.map(info => {
                                       return (
                                          <tr key={info.factura}>
                                             <td>{info.factura}</td>
                                             <td>{info.periodo}</td>
                                             <td>{info.fecha_venc}</td>
                                             <td>{info.poliza}</td>
                                             <td>{info.valor}</td>
                                             <td>{info.estado}</td>
                                             <td>{info.nit}</td>
                                             <td>{info.titular}</td>
                                             <td>{info.predio}</td>
                                             <td>{info.direccion}</td>
                                             <td>
                                                <Link
                                                   to="/"
                                                   className="btn btn-info btn-sm"
                                                >
                                                   <i className="fas fa-pencil-alt"></i>
                                                   Edit
                                                </Link>
                                             </td>
                                             <td>
                                                <Link
                                                   to="/"
                                                   className="btn btn-danger btn-sm"
                                                >
                                                   <i className="fas fa-trash"></i>
                                                   Delete
                                                </Link>
                                             </td>
                                          </tr>
                                       );
                                    })}
                                 </tbody>
                                 <tfoot>
                                    <tr>
                                       <th>N° Factura</th>
                                       <th>Periodo</th>
                                       <th>Vencimiento</th>
                                       <th>P&oacute;liza</th>
                                       <th>Valor</th>
                                       <th>Estado</th>
                                       <th>ID titular</th>
                                       <th>Nombre titular</th>
                                       <th>ID predio</th>
                                       <th>Dirección Predio</th>
                                       <th>Editar</th>
                                       <th>Eliminar</th>
                                    </tr>
                                 </tfoot>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
         </div>

         <Footer />

         <aside className="control-sidebar control-sidebar-dark"></aside>
      </div>
   );
}

export default Facturas;
