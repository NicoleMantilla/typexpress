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
    <div className= "form_container">
        <div className="form_header"> 
          <h1 className= "form_title"> Formulario de productos</h1>
        </div>
      <div className="form_body">

      <div className='form_form'>

          <label className='form_labelName' > Name </label>
          <input className= "form_input" id= "nombre" name= "nombre" value= { nombre } onChange={cambiarNombre}></input>
          <label for="description"> Description</label>
          <input id= "description" name= "description" type= "text" placeholder= "Add description"></input>
          <label> Price</label>
          <input type="number" id="price" name="price" pattern="[0-9]+" placeholder="price"></input>
          <button className="form_button" onClick={guardarClick}>Subir</button>
          <i className="fa-thin fa-upload"></i>
    </div>

  </div>
      
    <div className='form_footer'>
      <div className ="form_group"> </div>
    
    
    </div>

      
    </div>
  );

}

export default App;
