import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

function AdminLeftBar({ nombreUsuario, rolUsuario }) {
   return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
         <a href="index.html" className="brand-link">
            <img src="images/logo-triple-A-2.png" alt="logo AAA" width="200" />
         </a>

         <div className="sidebar">
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
               <div className="image">
                  <img
                     src="dist/img/user2-160x160.jpg"
                     className="img-circle elevation-2"
                     alt="User"
                  />
               </div>
               <div className="info text-white">
                  {nombreUsuario} - <small>{rolUsuario}</small>
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
                  <li className="nav-item menu-closed">
                     <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-file-invoice-dollar"></i>
                        <p>Facturas</p>
                     </a>
                     {/* <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a
                                 href="generar-factura.html"
                                 className="nav-link"
                              >
                                 <i className="fas fa-plus nav-icon"></i>
                                 <p>Generar</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a href="facturas.html" className="nav-link">
                                 <i className="fas fa-receipt nav-icon"></i>
                                 <p>Gestionar</p>
                              </a>
                           </li>
                        </ul> */}
                  </li>

                  <li className="nav-item menu-closed">
                     <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-landmark"></i>
                        <p>Impuestos & Subsidios </p>
                     </a>
                     {/* <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a
                                 href="crear-impuestos.html"
                                 className="nav-link"
                              >
                                 <i className="fas fa-plus nav-icon"></i>
                                 <p>Crear</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a
                                 href="gestionar-impuestos.html"
                                 className="nav-link"
                              >
                                 <i className="fas fa-list-ul nav-icon"></i>
                                 <p>Gestionar</p>
                              </a>
                           </li>
                        </ul> */}
                  </li>

                  <li className="nav-item menu-closed">
                     <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-city"></i>
                        <p>
                           Predios
                           {/* <span className="badge badge-warning right">
                                 .
                              </span>
                              <i className="right fas fa-angle-left"></i> */}
                        </p>
                     </a>
                     {/* <ul className="nav nav-treeview">
                           <li className="nav-item">
                              <a href="crear-predios.html" className="nav-link">
                                 <i className="fas fa-plus nav-icon"></i>
                                 <p>Crear</p>
                              </a>
                           </li>
                           <li className="nav-item">
                              <a
                                 href="gestionar-predios.html"
                                 className="nav-link"
                              >
                                 <i className="fas fa-list-ul nav-icon"></i>
                                 <p>Gestionar</p>
                              </a>
                           </li>
                        </ul> */}
                  </li>

                  <li className="nav-item">
                     <a href="configuracion.html" className="nav-link">
                        <i className="nav-icon fas fa-check-double"></i>
                        <p>
                           Configuración Valores{' '}
                           {/* <span className="badge badge-danger right">
                                 .
                              </span> */}
                        </p>
                     </a>
                  </li>

                  <li className="nav-item">
                     <a href="usuarios.html" className="nav-link">
                        <i className="nav-icon fas fa-columns"></i>
                        <p>
                           Ver Usuarios
                           {/* <span className="badge badge-info right">25</span> */}
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
                     <Link to="/" className="nav-link">
                        <i className="nav-icon fas fa-user-clock"></i>

                        <p>Cerrar Sesión</p>
                     </Link>
                  </li>
               </ul>
            </nav>
         </div>
      </aside>
   );
}

export default AdminLeftBar;
