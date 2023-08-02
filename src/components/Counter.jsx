import useCounter from "../hooks/useCounter"


export default function Counter() {
   const {  counter, increment, resert, decrement}= useCounter(0)
  return (
    <>
    <h2>Counter: {counter}</h2>
    <button className="btn btn-primary" onClick={() => increment(1)}>+1</button>
    <button className="btn btn-info" onClick={() => resert()}>Resert</button>
    <button className="btn btn-primary" onClick={() => decrement(1, false)}>-1</button>
    </>
  )
}
