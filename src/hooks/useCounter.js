import { useState } from "react"

export default function useCounter(initialValue = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increment = (valor = 1) => {
    setCounter(counter + valor );
  }
  const decrement = (valor = 1, negativ) => {
    if (!negativ && counter < 1) return
    setCounter(counter - valor );
  }
  const resert = () => {
    setCounter(0 );
  }

  return {
    counter,
    increment,
    resert,
    decrement
  }
}
