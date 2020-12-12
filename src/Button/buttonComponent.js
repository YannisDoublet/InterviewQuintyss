import React, { useContext } from 'react'
import IncrementContext from '../Context/incrementContext'

const Button = () => {
    const { counter, increment } = useContext(IncrementContext)
    return (
        <button onClick={() => increment(counter)}>Incrémenter</button>
    )
}

export default Button