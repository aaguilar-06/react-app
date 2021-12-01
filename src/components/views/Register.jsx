import React, { useEffect, useState } from 'react';

function Login() {
   return (
      <div className="register-box">
         <div className="card card-outline card-primary">
            <div className="card-header text-center">
               <a href="index.html" className="h1">
                  <img src="images/logo-triple-A.png" alt="register" />
               </a>
            </div>
            <div className="card-body">
               <p className="login-box-msg">Registro Público de Usuario</p>

               <form action="index.html" method="post">
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
                        placeholder="NIC / Contrato"
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
                  <div className="input-group mb-3">
                     <input
                        type="password"
                        className="form-control"
                        placeholder="Confirmar Contraseña"
                     />
                     <div className="input-group-append">
                        <div className="input-group-text">
                           <span className="fas fa-lock"></span>
                        </div>
                     </div>
                  </div>
                  <div className="row">
                     <div className="col-8">
                        <div className="icheck-primary">
                           <input
                              type="checkbox"
                              id="agreeTerms"
                              name="terms"
                              value="agree"
                           />
                           <label for="agreeTerms">
                              Aceptar <a href="#">terminos y condiciones</a>
                           </label>
                        </div>
                     </div>
                     <div className="col-4">
                        <button
                           type="submit"
                           className="btn btn-primary btn-block"
                        >
                           Registrar
                        </button>
                     </div>
                  </div>
               </form>

               <a href="login.html" className="text-center">
                  ¡Ya estoy registrado! Entrar
               </a>
            </div>
         </div>
      </div>
   );
}

export default Login;
