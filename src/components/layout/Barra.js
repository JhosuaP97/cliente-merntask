import React from "react";

const Barra = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>Jhosua pachón</span>
      </p>
      <nav className="nav-principal">
        <a href="#!">Cerrar sesión</a>
      </nav>
    </header>
  );
};

export default Barra;
