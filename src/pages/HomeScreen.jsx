
import { useContext } from 'react';
import { UserContext } from './context/UserContext';
import { NavLink } from 'react-router-dom';

export const HomeScreen = () => {

const { usuario } = useContext( UserContext )

  return (
   <>
    <div style={{marginLeft: '20px', marginRight: '20px'}}>
      <table  className="table table-striped table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tecnologia</th>
            <th scope="col">Mail</th>
            <th scope="col">Redes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{usuario.nombre}</th>
            <td>{usuario.tecnologia}</td>
            <td>{usuario.email}</td>
            <td>{usuario.redes}</td>
          </tr>
        </tbody>
        <NavLink to='/user'>
          <button style={{marginTop: '20px'}}>Register</button>
        </NavLink>
      </table>
    </div>
   </>
  )
}
