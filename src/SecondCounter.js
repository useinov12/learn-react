import React, {useState, useContext} from 'react'
import {ThemeContext} from './App'

export default function SecondCounter({initialCount}) {
    const [state, setCount] = useState(initialCount)
    const style = useContext(ThemeContext)
    return (
        <div>
            <button style={style} onClick={()=>setCount( prevCount => prevCount -1)}>-</button>
            <span>{state}</span>
            <button style={style} onClick={()=>setCount(prevCount => prevCount +1)}>+</button>
        </div>
    )
}
