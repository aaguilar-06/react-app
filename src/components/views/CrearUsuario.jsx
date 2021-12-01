import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';

function Login() {
   return (
      <div className="wrapper">
         <UserTopNav />

         <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <a href="index.html" className="brand-link">
               <img src="images/logo-triple-A-2.png" width="200" />
            </a>

            <div className="sidebar">
               <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                     <img
                        src="dist/img/user2-160x160.jpg"
                        className="img-circle elevation-2"
                        alt="User Image"
                     />
                  </div>
                  <div className="info">
                     <a href="#" className="d-block">
                        Administrador
                     </a>
                  </div>
               </div>

               <nav className="mt-2">
                  <ul
                     className="nav nav-pills nav-sidebar flex-column"
                     data-widget="treeview"
                     role="menu"
                     data-accordion="false"
                  >
                     <li className="nav-header">MENÚ</li>
                     <li className="nav-item">
                        <a href="administradores.html" className="nav-link">
                           <i className="nav-icon fas fa-columns"></i>
                           <p>
                              Ver Administradores
                              <span className="badge badge-info right">5</span>
                           </p>
                        </a>
                     </li>

                     <li className="nav-item">
                        <a href="usuarios.html" className="nav-link">
                           <i className="nav-icon fas fa-columns"></i>
                           <p>
                              Ver Usuarios
                              <span className="badge badge-info right">25</span>
                           </p>
                        </a>
                     </li>

                     <li className="nav-item">
                        <a href="crearusuarios.html" className="nav-link">
                           <i className="nav-icon fas fa-user-alt"></i>
                           <p>Crear Usuario</p>
                        </a>
                     </li>

                     <li className="nav-item">
                        <a href="politicasprivacidad.html" className="nav-link">
                           <i className="nav-icon fas fa-closed-captioning"></i>
                           <p>Politicas de Privacidad</p>
                        </a>
                     </li>

                     <li className="nav-item">
                        <a href="login.html" className="nav-link">
                           <i className="nav-icon fas fa-user-clock"></i>
                           <p>Cerrar Sesión</p>
                        </a>
                     </li>
                  </ul>
               </nav>
            </div>
         </aside>

         <div className="content-wrapper">
            <section className="content-header">
               <div className="container-fluid">
                  <div className="row mb-2">
                     <div className="col-sm-6">
                        <h1>Nuevos Usuarios</h1>
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
                        <div className="card card-primary">
                           <div className="card-header">
                              <h3 className="card-title">Crear Usuarios</h3>
                           </div>
                           <form>
                              <div className="card-body">
                                 <div className="input-group mb-3">
                                    <input
                                       type="text"
                                       id="apellidos"
                                       className="form-control"
                                       placeholder="Apellidos"
                                    />
                                    <div className="input-group-append">
                                       <div className="input-group-text">
                                          <span className="fas fa-user"></span>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="input-group mb-3">
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Nombres"
                                    />
                                    <div className="input-group-append">
                                       <div className="input-group-text">
                                          <span className="fas fa-user"></span>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="input-group mb-3">
                                    <input
                                       type="text"
                                       className="form-control"
                                       placeholder="Cédula"
                                    />
                                    <div className="input-group-append">
                                       <div className="input-group-text">
                                          <span className="fas fa-id-card"></span>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="input-group mb-3">
                                    <input
                                       type="email"
                                       className="form-control"
                                       placeholder="Email"
                                    />
                                    <div className="input-group-append">
                                       <div className="input-group-text">
                                          <span className="fas fa-envelope"></span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="input-group mb-3">
                                    <input
                                       type="password"
                                       className="form-control"
                                       placeholder="Contraseña"
                                    />
                                    <div className="input-group-append">
                                       <div className="input-group-text">
                                          <span className="fas fa-lock"></span>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="form-group">
                                    <label>Seleccionar Rol</label>
                                    <select
                                       className="form-control"
                                       placeholder="Seleccionar Rol"
                                    >
                                       <option>Administrador</option>
                                       <option>Interno</option>
                                       <option>De campo</option>
                                    </select>
                                 </div>
                              </div>
                              <div className="card-footer">
                                 <button
                                    type="submit"
                                    className="btn btn-primary"
                                 >
                                    Registrar
                                 </button>
                              </div>
                           </form>
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

export default Login;
