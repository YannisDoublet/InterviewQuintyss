import React from 'react'

const increment = (value, setValue) => {
    return setValue(value + 1)
}

const IncrementContext = React.createContext(increment)

export default IncrementContext