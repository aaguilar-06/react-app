import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';
import AdminLeftBar from '../partials/AdminLeftBar';

import { Link } from 'react-router-dom';

function CrearImpuesto({ user }) {
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
                        <h1>Impuestos</h1>
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
                        <div class="card card-primary">
                           <div class="card-header">
                              <h3 class="card-title">Crear Impuesto</h3>
                           </div>
                           <form>
                              <div class="card-body">
                                 <div class="form-group">
                                    <label for="inputIdusuario">Nombre:</label>
                                    <input
                                       type="name"
                                       class="form-control"
                                       id="subsidioName"
                                       value=""
                                       name="subsidioName"
                                       placeholder="Digite Nombre del Impuesto"
                                    />
                                 </div>

                                 <div class="form-group">
                                    <h3>Valores % por estratos</h3>
                                    <label for="inputUsername">1:</label>

                                    <input
                                       type="number"
                                       class="form-control"
                                       id="est1"
                                       name="est1"
                                       value=""
                                    />

                                    <label for="inputUsername">2:</label>

                                    <input
                                       type="number"
                                       class="form-control"
                                       id="est2"
                                       name="est2"
                                       value=""
                                    />

                                    <label for="inputUsername">3:</label>

                                    <input
                                       type="number"
                                       class="form-control"
                                       id="est3"
                                       name="est3"
                                       value=""
                                    />

                                    <label for="inputUsername">4:</label>

                                    <input
                                       type="number"
                                       class="form-control"
                                       id="est4"
                                       name="est4"
                                       value=""
                                    />

                                    <label for="inputUsername">5:</label>

                                    <input
                                       type="number"
                                       class="form-control"
                                       id="est5"
                                       name="est5"
                                       value=""
                                    />

                                    <label for="inputUsername">6:</label>

                                    <input
                                       type="number"
                                       class="form-control"
                                       id="est6"
                                       name="est6"
                                       value=""
                                    />

                                    <label for="inputUsername">7:</label>

                                    <input
                                       type="number"
                                       class="form-control"
                                       id="est7"
                                       name="est7"
                                       value=""
                                    />
                                 </div>

                                 <div class="form-group">
                                    <label for="inputlecturact">Estado:</label>
                                    <div class="form-check">
                                       <input
                                          class="form-check-input"
                                          type="checkbox"
                                       />
                                       <label class="form-check-label">
                                          Activo
                                       </label>
                                    </div>
                                 </div>
                              </div>
                              <div class="card-footer">
                                 <button type="submit" class="btn btn-primary">
                                    Crear
                                 </button>
                              </div>
                           </form>
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

export default CrearImpuesto;
