

import { useForm } from "../hooks/useForm"
import { useReducer } from "react"

const initialState = [{

  id: new Date().getDate(),
  tarea: 'work 01',
  done: false

}]


const ADD_TAREA = '[TAREAS] agregar tarea'; // Define las acciones como strings
const FINALIZAR_TAREA = '[TAREAS] finalizar tarea';
const ELIMINAR_TAREA = '[TAREAS] eliminar tarea';
const BORRAR_TAREAS = '[TAREAS] borrar tareas';

const tareaReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TAREA: 
      return [...state, action.payload];
    case FINALIZAR_TAREA:
      return state.map(tarea => {
        if (tarea.id == action.payload.id){
          return {
            ...tarea,
            done: !tarea. done
          } 
        } return tarea
      });
    case ELIMINAR_TAREA:
      return state.filter(tarea => tarea.id !== action.payload);
    case BORRAR_TAREAS:
      return [];
    default:
      return state;
  }
};


export const ListaTareas = () => {

    const [tareasState, dispatch] = useReducer(tareaReducer, initialState)

    const {tarea, formState, onInputChange} = useForm({tarea: '' })
    
    const agregarTarea = (event) => {
      event.preventDefault();
      if (formState.tarea === '') return;
      const tarea = {
        id: new Date().getTime(),
        tarea: formState.tarea,
        done: false,
      };
      const action = {
        type: ADD_TAREA, 
        payload: tarea,
      };
      dispatch(action);
    };

    const finalizarTarea = (id) => {

      const action = {
          type: '[TAREAS] finalizar tarea',
          payload: id
      }
      dispatch(action)
    }

    const eliminarTarea = ({id}) => {
      const action = {
        type: '[TAREAS] eliminar tarea',
        payload: id
      }
      dispatch(action)
    }

    const reset = () => {
      const action = {
        type: '[TAREAS] borrar tareas',
        payload: ''
      }
      dispatch(action)
    }
  return (
    <>
    <h2>Add Task</h2>
      <form onSubmit={agregarTarea}>
        <div className="form-group">  
          <input 
            type="text" 
            className="form-control" 
            name="tarea" 
            placeholder="Enter task"
            value= {tarea}
            onChange= {onInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        <button type="button" className="btn btn-info" onClick={reset}>Reset</button>
      
      </form>
      <hr/>
      <ul className="list-group">
        {tareasState.map (item => {
          return (
           <li key={item.id} className="list-group-item d-flex justify-content-between">
            <span>{item.tarea}</span>
            <div>
            <input 
              type='checkbox'
              value={item.done}
              onChange={() => finalizarTarea(item)}
            />
            <button 
              className="btn btn-danger rounded-circle"
              onClick={()=> eliminarTarea(item)}
            >
              🗑</button>
            </div>
 
           </li>
          )
        })}
      </ul>
    </>
  )
}

// {item.done ? '✅' : '❌'}
