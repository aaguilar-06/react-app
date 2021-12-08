import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';
import AdminLeftBar from '../partials/AdminLeftBar';

import { Link } from 'react-router-dom';

function FacturasUsuario({ user }) {
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
                        <h1>Historial de Facturas</h1>
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
                        <div class="card card-primary card-outline">
                           <div class="card-header">
                              <h3 class="card-title">
                                 <i class="far fa-chart-bar"></i>
                                 Historial de consumo&nbsp; &nbsp; &nbsp; &nbsp;
                                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{' '}
                              </h3>

                              <div class="card-tools">
                                 <button
                                    type="button"
                                    class="btn btn-tool"
                                    data-card-widget="collapse"
                                 >
                                    <i class="fas fa-minus"></i>
                                 </button>
                                 <button
                                    type="button"
                                    class="btn btn-tool"
                                    data-card-widget="remove"
                                 >
                                    <i class="fas fa-times"></i>
                                 </button>
                              </div>
                           </div>
                           <div class="card-body">
                              <div
                                 id="bar-chart"
                                 style={{ height: '300px' }}
                              ></div>
                           </div>
                        </div>

                        <div class="card">
                           <div class="card-header"></div>
                           <div class="card-body">
                              <table
                                 id="example1"
                                 class="table table-bordered table-striped"
                              >
                                 <thead>
                                    <tr>
                                       <th>Factura #</th>
                                       <th>Mes</th>
                                       <th>Predio</th>
                                       <th>Fecha Emi.</th>
                                       <th>Fecha Venc.</th>
                                       <th>Consumo</th>
                                       <th>Total $</th>
                                       <th>Estado</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>13887799</td>
                                       <td>Noviembre</td>
                                       <td>18772</td>
                                       <td>17/11/2021</td>
                                       <td>30/11/2021</td>
                                       <td>45 Mc</td>
                                       <td>$60.000</td>
                                       <td>Pendiente</td>
                                    </tr>

                                    <tr>
                                       <td>12887811</td>
                                       <td>Octubre</td>
                                       <td>18772</td>
                                       <td>17/10/2021</td>
                                       <td>30/10/2021</td>
                                       <td>55 Mc</td>
                                       <td>$77.000</td>
                                       <td>Pagada</td>
                                    </tr>

                                    <tr>
                                       <td>12661011</td>
                                       <td>Septiembre</td>
                                       <td>18772</td>
                                       <td>17/09/2021</td>
                                       <td>30/09/2021</td>
                                       <td>70 Mc</td>
                                       <td>$92.000</td>
                                       <td>Pagada</td>
                                    </tr>

                                    <tr>
                                       <td>12551011</td>
                                       <td>Agosto</td>
                                       <td>18772</td>
                                       <td>17/08/2021</td>
                                       <td>30/08/2021</td>
                                       <td>40 Mc</td>
                                       <td>$40.000</td>
                                       <td>Pagada</td>
                                    </tr>

                                    <tr>
                                       <td>10881000</td>
                                       <td>Julio</td>
                                       <td>18772</td>
                                       <td>17/07/2021</td>
                                       <td>30/07/2021</td>
                                       <td>50 Mc</td>
                                       <td>$50.000</td>
                                       <td>Pagada</td>
                                    </tr>

                                    <tr>
                                       <td>10761000</td>
                                       <td>Junio</td>
                                       <td>18772</td>
                                       <td>17/06/2021</td>
                                       <td>30/06/2021</td>
                                       <td>30 Mc</td>
                                       <td>$40.000</td>
                                       <td>Pagada</td>
                                    </tr>
                                 </tbody>
                                 <tfoot>
                                    <tr>
                                       <th>Factura #</th>
                                       <th>Mes</th>
                                       <th>Predio</th>
                                       <th>Fecha Emi.</th>
                                       <th>Fecha Venc.</th>
                                       <th>Consumo</th>
                                       <th>Total $</th>
                                       <th>Estado</th>
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

export default FacturasUsuario;
