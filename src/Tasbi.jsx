import { useState } from "react"

export default function Tasbi(){
    let [count, setCount] = useState(0);
    return (
        <>
            <h3>Tasbi Counter</h3>
            <h1 style={{color: "#fff"}}>{count}</h1>
            <div style={{display: "flex", justifyContent: "center"}}>
                <button onClick={() => setCount(++count)}>Add</button>
                <button onClick={() => setCount(--count)}>Minus</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>
        </>
    )
}