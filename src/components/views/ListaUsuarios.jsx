import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';
import AdminLeftBar from '../partials/AdminLeftBar';

import { Link } from 'react-router-dom';

function ListaImpuestos({ user }) {
   const [userData, setUserData] = useState({
      id: 23,
      nombreUsuario: 'Andres Felipe',
      rol: 'admin',
   });

   return (
      <div class="wrapper">
         <UserTopNav />

         <AdminLeftBar
            nombreUsuario={userData.nombreUsuario}
            rolUsuario={userData.rol}
         />

         <div class="content-wrapper">
            <section class="content-header">
               <div class="container-fluid">
                  <div class="row mb-2">
                     <div class="col-sm-6">
                        <h1>Gestión de Usuarios</h1>
                     </div>
                     <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                           <li class="breadcrumb-item">
                              <a href="#">Inicio</a>
                           </li>
                           <li class="breadcrumb-item active">
                              Administradores
                           </li>
                        </ol>
                     </div>
                  </div>
               </div>
            </section>

            <section class="content">
               <div class="container-fluid">
                  <div class="row">
                     <div class="col-12">
                        <div class="card">
                           <div class="card-header"></div>
                           <div class="card-body">
                              <table
                                 id="example1"
                                 class="table table-bordered table-striped"
                              >
                                 <thead>
                                    <tr>
                                       <th>Usuario</th>
                                       <th>Nombre / Razón Social</th>
                                       <th>Predio</th>
                                       <th>Estrato</th>
                                       <th>Ciudad</th>
                                       <th>Dirección</th>
                                       <th>Teléfono</th>
                                       <th>Facturar</th>
                                       <th>Revisar</th>
                                       <th>Report</th>
                                       <th>Editar</th>
                                       <th>Eliminar</th>

                                       <i class="fa-solid fa-screwdriver-wrench"></i>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>121346451</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>134967</td>
                                       <td>3</td>
                                       <td>Santa Marta</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>3011333151</td>
                                       <td>
                                          <a
                                             class="btn btn-success btn-sm"
                                             href="crear-factura.html"
                                             title="Facturar"
                                             alt="Facturar"
                                          >
                                             <i class="fas fa-cart-plus"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-warning btn-sm"
                                             href="crear-factura.html"
                                             title="Generar Revisión"
                                             alt="Generar Revisión"
                                          >
                                             <i class="fas fa-hammer"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-warning btn-sm"
                                             href="crear-reporte.html"
                                             title="Reportes"
                                             alt="Reportes"
                                          >
                                             <i class="fas fa-info"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-info btn-sm"
                                             href="#"
                                          >
                                             <i class="fas fa-pencil-alt"></i>
                                             Edit
                                          </a>
                                       </td>
                                       <td>
                                          <a
                                             class="btn btn-danger btn-sm"
                                             href="#"
                                          >
                                             <i class="fas fa-trash"></i>
                                             Delete
                                          </a>
                                       </td>
                                    </tr>

                                    <tr>
                                       <td>1212223</td>
                                       <td>Maria Ramirez</td>
                                       <td>134867</td>
                                       <td>3</td>
                                       <td>Santa Marta</td>
                                       <td>Cra 40 # 82 - 15</td>
                                       <td>3011335781</td>
                                       <td>
                                          <a
                                             class="btn btn-success btn-sm"
                                             href="crear-factura.html"
                                             title="Facturar"
                                             alt="Facturar"
                                          >
                                             <i class="fas fa-cart-plus"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-warning btn-sm"
                                             href="crear-factura.html"
                                             title="Generar Revisión"
                                             alt="Generar Revisión"
                                          >
                                             <i class="fas fa-hammer"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-warning btn-sm"
                                             href="crear-reporte.html"
                                             title="Reportes"
                                             alt="Reportes"
                                          >
                                             <i class="fas fa-info"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-info btn-sm"
                                             href="#"
                                          >
                                             <i class="fas fa-pencil-alt"></i>
                                             Edit
                                          </a>
                                       </td>
                                       <td>
                                          <a
                                             class="btn btn-danger btn-sm"
                                             href="#"
                                          >
                                             <i class="fas fa-trash"></i>
                                             Delete
                                          </a>
                                       </td>
                                    </tr>

                                    <tr>
                                       <td>56477448</td>
                                       <td>Magdalena Gomez</td>
                                       <td>12134710</td>
                                       <td>3</td>
                                       <td>Santa Marta</td>
                                       <td>Cl 11 # 40 - 17</td>
                                       <td>3011335233</td>
                                       <td>
                                          <a
                                             class="btn btn-success btn-sm"
                                             href="crear-factura.html"
                                             title="Facturar"
                                             alt="Facturar"
                                          >
                                             <i class="fas fa-cart-plus"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-warning btn-sm"
                                             href="crear-factura.html"
                                             title="Generar Revisión"
                                             alt="Generar Revisión"
                                          >
                                             <i class="fas fa-hammer"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-warning btn-sm"
                                             href="crear-reporte.html"
                                             title="Reportes"
                                             alt="Reportes"
                                          >
                                             <i class="fas fa-info"></i>
                                          </a>
                                       </td>

                                       <td>
                                          <a
                                             class="btn btn-info btn-sm"
                                             href="#"
                                          >
                                             <i class="fas fa-pencil-alt"></i>
                                             Edit
                                          </a>
                                       </td>
                                       <td>
                                          <a
                                             class="btn btn-danger btn-sm"
                                             href="#"
                                          >
                                             <i class="fas fa-trash"></i>
                                             Delete
                                          </a>
                                       </td>
                                    </tr>
                                 </tbody>
                                 <tfoot>
                                    <tr>
                                       <th>Nit / CC</th>
                                       <th>Usuario</th>
                                       <th>Predio</th>
                                       <th>Estrato</th>
                                       <th>Ciudad</th>
                                       <th>Dirección</th>
                                       <th>Teléfono</th>
                                       <th>Facturar</th>
                                       <th>Revisar</th>
                                       <th>Report</th>
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
         <footer class="main-footer">
            <div class="float-right d-none d-sm-block">
               <b>Version</b> 1.0 Beta
            </div>
            <strong>
               Copyright &copy; Misión TIC 2022 - Uninorte - Grupo 1234 - Team 6
               - <a href="#">Proyecto Ciclo 4</a>.
            </strong>{' '}
            Todos los Derechos Reservados
         </footer>

         <aside class="control-sidebar control-sidebar-dark"></aside>
      </div>
   );
}

export default ListaImpuestos;
