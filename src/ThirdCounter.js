import React, {useState} from 'react';

export default function ThirdCounter({initialCount}) {
    const [num, setCount] = useState(initialCount)
    return (
        <div>   
        <button onClick={()=>setCount(prevCount => prevCount -1)}>-</button>
            <span>{num}</span>
        <button onClick={()=> setCount(prevCount => prevCount +1)}>+</button>
            
        </div>
    )
}
