import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';
import AdminLeftBar from '../partials/AdminLeftBar';

import { Link } from 'react-router-dom';

function CrearReporte({ user }) {
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
                        <h1>Reportes</h1>
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
                              <h3 class="card-title">Crear Reportes</h3>
                           </div>
                           <form>
                              <div class="card-body">
                                 <div class="form-group">
                                    <label for="inputIdusuario">
                                       Cédula / NIT:
                                    </label>
                                    <input
                                       type="number"
                                       class="form-control"
                                       id="usuarioId"
                                       value="73007040"
                                       name="usuarioId"
                                       disabled
                                    />
                                 </div>

                                 <div class="form-group">
                                    <label for="inputUsername">
                                       Nombre / Razón Social:
                                    </label>
                                    <input
                                       type="Name"
                                       class="form-control"
                                       id="usuarioNombre"
                                       name="usuarioNombre"
                                       value="Daniel Cabarcas"
                                       disabled
                                    />
                                 </div>

                                 <div class="form-group">
                                    <label for="inputDir">Dirección:</label>
                                    <input
                                       type="Name"
                                       class="form-control"
                                       id="usuarioDireccion"
                                       name="usuarioDireccion"
                                       value="Calle 9 # 16a 41 cs 16"
                                       disabled
                                    />
                                 </div>

                                 <div class="form-group">
                                    <label for="inputCiudad">Ciudad:</label>
                                    <input
                                       type="Name"
                                       class="form-control"
                                       id="usuarioCiudad"
                                       name="usuarioCiudad"
                                       value="Almendros"
                                       disabled
                                    />
                                 </div>

                                 <div class="form-group">
                                    <label for="inputlecturact">Motivo:</label>
                                    <select
                                       class="form-control"
                                       placeholder="Seleccionar Rol"
                                    >
                                       <option value="Averia">Averias</option>
                                       <option value="Atención al Cliente">
                                          Atención al Cliente
                                       </option>
                                       <option value="Quejas">Quejas</option>
                                       <option value="Sugerencias">
                                          Sugerencias
                                       </option>
                                    </select>
                                 </div>

                                 <div class="form-group">
                                    <label for="inputlecturaDate">Fecha:</label>
                                    <input
                                       type="date"
                                       class="form-control"
                                       id="usuarioLecturaDate"
                                       name="usuarioLecturaDate"
                                    />
                                 </div>

                                 <div class="form-group">
                                    <label for="inputlecturaDate">Nota:</label>
                                    <input
                                       type="text"
                                       class="form-control"
                                       id="usuarioLecturaDate"
                                       name="usuarioLecturaDate"
                                    />
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

export default CrearReporte;
