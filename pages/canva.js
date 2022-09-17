import React, {useEffect, useState, useRef} from 'react'
import Options from "../components/options";
import Map from "../components/map";

const CanvasEditor = () => {
  const [currentColor, setCurrentColor] = useState("#FFF");

  return (
    <div className=''>
        <Options handleColor={setCurrentColor}/>
        <Map currentColor={currentColor} />
    </div>
  );
}

export default CanvasEditor
