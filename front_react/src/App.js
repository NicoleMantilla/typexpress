import React, {useState} from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState( "Nombre Producto");

  const cambiarNombre = (e) => {
    const value = e.target.value;
    console.log(value);
    setNombre(value);
  }

  const guardarClick = () => {

    console.log("Este es mi estado local: ", nombre);
  }
  

  return (
    <div classNAme= "App">
      <h1> Item </h1>
      <label > Name </label>
      <input id= "nombre" name= "nombre" value= { nombre } onChange={cambiarNombre}></input>
      <label for="description"> Description</label>
      <input id= "description" name= "description" type= "text" placeholder= "Add description"></input>
      <label> Price</label>
      <input type="number" id="price" name="price" pattern="[0-9]+" placeholder="price"></input>
      <button onClick={guardarClick}>Subir</button>


    </div>
  );

}

export default App;
