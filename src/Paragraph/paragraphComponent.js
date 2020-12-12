import React, { useContext } from 'react'
import IncrementContext from '../Context/incrementContext'

const Paragraph = () => {
    const { counter } = useContext(IncrementContext)
    return (
        <p>{counter}</p>
    )
}

export default Paragraph