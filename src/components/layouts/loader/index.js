import React from 'react';
import './Loader.css'; // Archivo de estilos para el componente

const Loader = () => {
  return (
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
      <div className="shadow"></div>
    </div>
  );
};

export { Loader};