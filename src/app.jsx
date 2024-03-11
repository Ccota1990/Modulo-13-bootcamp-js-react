import React from "react";

export const App = () => {
  const [usuario, setUsuario] = React.useState({
   nombre: "Manolo",
   apellidos: "Torres"  
  });
  

  return (
    <>
      <h1>Nombre: {usuario.nombre}</h1>
      <input
        value = {usuario.nombre}
        onChange={(event) =>{
          setUsuario({
            ...usuario,
            nombre: event.target.value,
          })
        }}
        />
      <h1>Apellido: {usuario.apellidos}</h1>
      <input
        value = {usuario.apellidos}
        onChange={(event) =>{
          setUsuario({
            ...usuario,
            apellidos: event.target.value,
          })
        }}
        />
    </>
  );
};

