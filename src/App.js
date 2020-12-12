import React, { useState } from 'react'
import Button from './Button/buttonComponent'
import Paragraph from './Paragraph/paragraphComponent'
import IncrementContext from './Context/incrementContext'

function App() {
  let [counter, setCounter] = useState(0)
  return (
    <IncrementContext.Provider value={{
      counter,
      increment: (counter) => {
        return setCounter(counter + 1)
      }
    }}>
      <Paragraph />
      <Button />
    </IncrementContext.Provider>
  );
}

export default App;
