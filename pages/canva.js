import React, {useEffect, useState, useRef} from 'react'
import Options from "../components/options";
import Map from "../components/options";



const CanvasEditor = () => {
  const [currentColor, setCurrentColor] = useState("#000")
  const app = useRef()

  useEffect(() => {
    
  }, []);

  return (
    <div className='w-full container'>
      <div className="mapEditorContainer">
        <Options handleColor={setCurrentColor}/>
        <Map currentColor={currentColor} />
      </div>
      <div ref={app}></div>
    </div>
  );
}

export default CanvasEditor
