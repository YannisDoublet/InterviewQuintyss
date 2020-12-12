import React, { useState, useContext } from 'react'
import Button from './Button/buttonComponent'
import Paragraph from './Paragraph/paragraphComponent'
import IncrementContext from './Context/incrementContext'

function App() {
  const [value, setValue] = useState(0)
  const increment = useContext(IncrementContext)

  return (
    <IncrementContext.Provider value={increment}>
      <Paragraph value={value} />
      <Button increment={increment} value={value} setValue={setValue} />
    </IncrementContext.Provider>
  );
}

export default App;
