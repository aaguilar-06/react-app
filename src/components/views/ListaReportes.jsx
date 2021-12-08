import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';
import AdminLeftBar from '../partials/AdminLeftBar';

import { Link } from 'react-router-dom';

function ListaReportes({ user }) {
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
                        <h1>Gestión de Reportes</h1>
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
                                       <th>N°</th>
                                       <th>CC/Nit</th>
                                       <th>Titular</th>
                                       <th>Motivo</th>
                                       <th>Predio</th>
                                       <th>Ciudad</th>
                                       <th>Estrato</th>
                                       <th>Estado</th>
                                       <th>Celular</th>
                                       <th>Dirección</th>
                                       <th>Observación</th>
                                       <th>Editar</th>
                                       <th>Eliminar</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>OS1001</td>
                                       <td>1082936822</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>Averia</td>
                                       <td>12345678</td>
                                       <td>Santa Marta</td>
                                       <td>3</td>
                                       <td>Pendiente</td>
                                       <td>3014000887</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>Problemas con las tuberías</td>
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
                                       <td>OS1001</td>
                                       <td>11144881</td>
                                       <td>Maria Gutierrez</td>
                                       <td>Sugerencia</td>
                                       <td>12345678</td>
                                       <td>Santa Marta</td>
                                       <td>3</td>
                                       <td>Pendiente</td>
                                       <td>3014000887</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>Problemas con las tuberías</td>
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
                                       <td>OS1001</td>
                                       <td>121346451</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>Averia</td>
                                       <td>12345678</td>
                                       <td>Santa Marta</td>
                                       <td>3</td>
                                       <td>Pendiente</td>
                                       <td>3014000887</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>Problemas con las tuberías</td>
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
                                       <td>OS1001</td>
                                       <td>121346451</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>Averia</td>
                                       <td>12345678</td>
                                       <td>Santa Marta</td>
                                       <td>3</td>
                                       <td>Pendiente</td>
                                       <td>3014000887</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>Problemas con las tuberías</td>
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
                                       <td>OS1001</td>
                                       <td>121346451</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>Averia</td>
                                       <td>12345678</td>
                                       <td>Santa Marta</td>
                                       <td>3</td>
                                       <td>Pendiente</td>
                                       <td>3014000887</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>Problemas con las tuberías</td>
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
                                       <td>OS1001</td>
                                       <td>121346451</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>Averia</td>
                                       <td>12345678</td>
                                       <td>Santa Marta</td>
                                       <td>3</td>
                                       <td>Pendiente</td>
                                       <td>3014000887</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>Problemas con las tuberías</td>
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
                                       <td>OS1001</td>
                                       <td>121346451</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>Averia</td>
                                       <td>12345678</td>
                                       <td>Santa Marta</td>
                                       <td>3</td>
                                       <td>Pendiente</td>
                                       <td>3014000887</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>Problemas con las tuberías</td>
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
                                       <th>N°</th>
                                       <th>CC/Nit</th>
                                       <th>Titular</th>
                                       <th>Motivo</th>
                                       <th>Predio</th>
                                       <th>Ciudad</th>
                                       <th>Estrato</th>
                                       <th>Estado</th>
                                       <th>Celular</th>
                                       <th>Dirección</th>
                                       <th>Observación</th>
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

export default ListaReportes;
