import React, {useEffect, useState, useRef} from 'react'
import Options from "../components/options";
import Map from "../components/map";

const CanvasEditor = () => {
  const [currentColor, setCurrentColor] = useState("#56B6C2");

  return (
    <div className=''>
        <Options handleColor={setCurrentColor}/>
        <Map currentColor={currentColor} />
    </div>
  );
}

export default CanvasEditor
