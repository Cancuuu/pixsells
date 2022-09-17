import React, {useState, createContext} from 'react'

export const CanvasContext = createContext()

const CanvasProvider = (props) => {

  const [canvas, setCanvas] = useState('');
    

    return (
        <CanvasContext.Provider value={{canvas}}>
            {props.children}
        </CanvasContext.Provider>
        
    )
}

export default CanvasProvider
    