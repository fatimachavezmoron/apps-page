import Counter from "./components/Counter";
import { Form } from './components/Form';
import { ListaTareas } from "./components/ListaTareas";
import { Users } from "./components/Users";


export default function HookApp() {
  return (
    <>
    <h1>Hooks aplication</h1>
    <hr/>
    <Counter />
    <hr />
    <Form />
    <hr />
    <Users />
    <hr />
     <ListaTareas />

    </>
  )
}
