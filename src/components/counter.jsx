import React from "react"

const Counter = ({ count, setCount }) => {


    return (
        <div>
            <button onClick={()=> count > 0 && setCount(count++)}>+</button>
            <input type="number" onChange={e => setCount(+e.target.value)} value={count}/>
            <button onClick={()=> count < 30 && setCount(count --)}>-</button>
        </div>
    )
}

export default Counter