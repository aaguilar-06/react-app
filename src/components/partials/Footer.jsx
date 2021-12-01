import React, { useEffect, useState } from 'react';

function Footer() {
   return (
      <footer className="main-footer">
         <div className="float-right d-none d-sm-block">
            <b>Version</b> 1.0 Beta
         </div>
         <strong>
            Copyright &copy; Misión TIC 2022 - Uninorte - Grupo 1234 - Team 6 -
            <a href="#">Proyecto Ciclo 4</a>.
         </strong>
         Todos los Derechos Reservados
      </footer>
   );
}

export default Footer;
