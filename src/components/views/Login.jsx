import React, { useEffect, useState } from 'react';

import MensajeError from '../partials/MensajeError';

import { Link, useNavigate } from 'react-router-dom';

function Login() {
   const [showErrorMessage, setShowErrorMessage] = useState(false);

   // * se usa para la redirección a otra página
   const navigate = useNavigate();

   const checkCredentials = e => {
      e.preventDefault();

      const form = document.querySelector('#loginForm');

      const email = form.elements['email'].value;
      const password = form.elements['password'].value;

      setShowErrorMessage(true);

      console.log(email);
      console.log(password);

      if (true) {
         navigate('/facturas');
      }
   };

   return (
      <div className="login-box">
         <div className="card card-outline card-primary">
            <div className="card-header text-center">
               <a href="index.html" className="h1">
                  <img src="../images/logo-triple-A.png" alt="test" />
               </a>
            </div>

            <div className="card-body">
               <p className="login-box-msg">Iniciar Sesión</p>

               <form id="loginForm" method="post" onSubmit={checkCredentials}>
                  <div className="input-group mb-3">
                     <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        name="email"
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
                        name="password"
                     />
                     <div className="input-group-append">
                        <div className="input-group-text">
                           <span className="fas fa-lock"></span>
                        </div>
                     </div>
                  </div>

                  <MensajeError
                     showMessage={showErrorMessage}
                     message="Credenciales incorrectas"
                  />

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
                  <Link to="/registro" className="text-center">
                     No tengo una cuenta
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}

export default Login;
