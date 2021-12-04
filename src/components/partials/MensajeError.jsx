import React, { useEffect, useState } from 'react';

function MensajeError({ message, showMessage }) {
   if (showMessage) {
      return <div className="alert alert-danger">{message}</div>;
   } else {
      return null;
   }
}

export default MensajeError;
