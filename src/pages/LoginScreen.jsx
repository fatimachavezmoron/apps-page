import { useForm } from "../hooks/useForm"
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginScreen = () => {

  const initialForm = {
    nombre: '',
    tecnologia: '',
    email: '',
    redes:''
  }

  const {nombre, tecnologia, email, redes, formState, onInputChange} = useForm(initialForm);

  const { setUsuario } = useContext( UserContext )

  const onSubmit = (e) => {
    e.preventDefault()
    setUsuario(formState)
  }

  return (
    <>
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input  style={{width: '300px'}} 
            type="text" 
            className="form-control" 
            name="nombre"  
            placeholder="Enter name"
            value={nombre}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tecnologia">Tecnologia</label>
          <input  style={{width: '300px'}}  
            type="text" 
            className="form-control" 
            name="tecnologia"  
            placeholder="Enter tech"
            value={tecnologia}
            onChange={onInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">email</label>
          <input  style={{width: '300px'}}  
            type="text" 
            className="form-control" 
            name="email" 
            placeholder="Enter email"
            value={email}
            onChange={onInputChange}
           />
        </div>
        <div className="form-group">
          <label htmlFor="redes">redes</label>
          <input  style={{width: '300px'}}  
            type="text" 
            className="form-control" 
            name="redes"  
            placeholder="Enter redes"
            value={redes}
            onChange={onInputChange}
          />
        </div>
     
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </>
  )
}
