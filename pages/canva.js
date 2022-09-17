import React, {useEffect, useState, useRef} from 'react'
import Options from "../components/options";
import Map from "../components/map";

const CanvasEditor = () => {
  const [currentColor, setCurrentColor] = useState("#FFF");

  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center'>
          <Map currentColor={currentColor} />
        </div>
        <div className='flex items-center justify-center'>
          <h2 className='text-black font-barlow text-2xl'>Add a color</h2>
          <input type="color" onChange={(e) => setCurrentColor(e.target.value)} />
        </div>
    </div>
  );
}

export default CanvasEditor
