import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';
import AdminLeftBar from '../partials/AdminLeftBar';

import { Link } from 'react-router-dom';

function ListaSubsidios({ user }) {
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
                        <h1>Gestión de Subsidios</h1>
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
                                       <th>Titulo&nbsp;</th>
                                       <th>E-1</th>
                                       <th>E-2</th>
                                       <th>E-3</th>
                                       <th>E-4</th>
                                       <th>E-5</th>
                                       <th>E-6</th>
                                       <th>E-7</th>
                                       <th>Estado</th>
                                       <th>Editar</th>
                                       <th>Eliminar</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>Especial 1</td>
                                       <td>12%</td>
                                       <td>12%</td>
                                       <td>10%</td>
                                       <td>8%</td>
                                       <td>4%</td>
                                       <td>0%</td>
                                       <td>0%</td>

                                       <td>Activo</td>

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
                                       <td>Alcaldia 1</td>
                                       <td>7%</td>
                                       <td>7%</td>
                                       <td>5%</td>
                                       <td>0%</td>
                                       <td>0%</td>
                                       <td>0%</td>
                                       <td>0%</td>

                                       <td>Activo</td>

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
                                       <th>Titulo&nbsp;</th>
                                       <th>E-1</th>
                                       <th>E-2</th>
                                       <th>E-3</th>
                                       <th>E-4</th>
                                       <th>E-5</th>
                                       <th>E-6</th>
                                       <th>E-7</th>
                                       <th>Estado</th>
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

export default ListaSubsidios;
