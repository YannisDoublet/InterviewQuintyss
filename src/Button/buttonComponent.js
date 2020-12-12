import React from 'react'

const Button = ({ increment, value, setValue }) => {
    return (
        <button onClick={() => increment(value, setValue)}>Incrémenter</button>
    )
}

export default Button