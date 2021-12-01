import React, { useEffect, useState } from 'react';

function Login() {
   return (
      <div className="login-box">
         <div className="card card-outline card-primary">
            <div className="card-header text-center">
               <a href="index.html" className="h1">
                  {/* <img src="../images/logo-triple-A.png" alt="test" /> */}
               </a>
            </div>

            <div className="card-body">
               <p className="login-box-msg">Iniciar Sesión</p>

               <form action="index3.html" method="post">
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
                  <div className="row">
                     <div className="col-8">
                        <div className="icheck-primary">
                           <input type="checkbox" id="remember" />
                           <label for="remember">Recordar cuenta</label>
                        </div>
                     </div>
                     <div className="col-4">
                        <button
                           type="submit"
                           className="btn btn-primary btn-block"
                        >
                           Entrar
                        </button>
                     </div>
                  </div>
               </form>

               <p className="mb-1">
                  <a href="recuperar-password.html">Olvidé mi Contraseña</a>
               </p>
               <p className="mb-0">
                  <a href="registrar-usuario.html" className="text-center">
                     Registrar Nuevo Usuario
                  </a>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Login;
