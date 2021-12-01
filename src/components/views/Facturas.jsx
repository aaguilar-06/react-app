import React, { useEffect, useState } from 'react';

import UserTopNav from '../partials/UserTopNav';
import Footer from '../partials/Footer';

function Facturas() {
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
                  <div className="info"></div>
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
                           <p>
                              Facturas{' '}
                              <span className="badge badge-danger right">
                                 .
                              </span>
                              <i className="right fas fa-angle-left"></i>
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
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
                        </ul>
                     </li>

                     <li className="nav-item menu-closed">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-landmark"></i>
                           <p>
                              Impuestos & Subsidios{' '}
                              <span className="badge badge-danger right">
                                 .
                              </span>
                              <i className="right fas fa-angle-left"></i>
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
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
                        </ul>
                     </li>

                     <li className="nav-item menu-closed">
                        <a href="#" className="nav-link">
                           <i className="nav-icon fas fa-city"></i>
                           <p>
                              Predios{' '}
                              <span className="badge badge-warning right">
                                 .
                              </span>
                              <i className="right fas fa-angle-left"></i>
                           </p>
                        </a>
                        <ul className="nav nav-treeview">
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
                        </ul>
                     </li>

                     <li className="nav-item">
                        <a href="configuracion.html" className="nav-link">
                           <i className="nav-icon fas fa-check-double"></i>
                           <p>
                              Configuración Valores{' '}
                              <span className="badge badge-danger right">
                                 .
                              </span>
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
                                    <tr>
                                       <td>121346451</td>
                                       <td>202111</td>
                                       <td>2021-12-10</td>
                                       <td>134967</td>
                                       <td>$321.570</td>
                                       <td>Pendiente</td>
                                       <td>12345678</td>
                                       <td>Carlos Galindo Sierra</td>
                                       <td>525581</td>
                                       <td>Cra 43 # 82 - 115</td>
                                       <td>
                                          <a
                                             className="btn btn-info btn-sm"
                                             href="#"
                                          >
                                             <i className="fas fa-pencil-alt"></i>
                                             Edit
                                          </a>
                                       </td>
                                       <td>
                                          <a
                                             className="btn btn-danger btn-sm"
                                             href="#"
                                          >
                                             <i className="fas fa-trash"></i>
                                             Delete
                                          </a>
                                       </td>
                                    </tr>

                                    <tr>
                                       <td>121346452</td>
                                       <td>202111</td>
                                       <td>2021-12-11</td>
                                       <td>134987</td>
                                       <td>$221.590</td>
                                       <td>Pendiente</td>
                                       <td>73007889</td>
                                       <td>Carlos Manuel Guerra</td>
                                       <td>525530</td>
                                       <td>Cra 30 # 11 - 51</td>
                                       <td>
                                          <a
                                             className="btn btn-info btn-sm"
                                             href="#"
                                          >
                                             <i className="fas fa-pencil-alt"></i>
                                             Edit
                                          </a>
                                       </td>
                                       <td>
                                          <a
                                             className="btn btn-danger btn-sm"
                                             href="#"
                                          >
                                             <i className="fas fa-trash"></i>
                                             Delete
                                          </a>
                                       </td>
                                    </tr>
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