import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../../Redux/AllSlice/CounterSlice/ConterSlice'

const CounterView = () => {

    useSelector(state => console.log("In counter component ,State value", state))

    const { count, msg } = useSelector(state => state.counter)
    let dispatch = useDispatch();
    return (
        <div>
            <h1>Count:{count}</h1>

            <button onClick={() => dispatch(increment())}>INC(+1) </button>
            <button onClick={() => dispatch(decrement())}>DEC(-1) </button>
            <button onClick={() => dispatch(reset())}>RESET</button>
            {msg && <p>{msg}</p>}

        </div>
    )
}

export default CounterView