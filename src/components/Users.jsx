
import { useFetch } from '../hooks/useFetch';

export const Users = () => {
  const {  data, isLoading, errors} = useFetch('https://jsonplaceholder.typicode.com/users')
  return (
    <>
    <h2>Users list</h2> 
    {isLoading 
    ? <h4>Loading...</h4>
    : errors 
      ? <p> An error occurred: {errors}</p>
      :
    <table className="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Email</th>
        <th scope="col">Website</th>
      </tr>
    </thead>
    <tbody>

      {data.map(user =>{
        return(     
           <tr key={user.id}>
            <th scope="row">{user.id}</th>
            <td>{user.email}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
           </tr>)
      })}
    </tbody>
  </table>
    }

    </>
  )
}
