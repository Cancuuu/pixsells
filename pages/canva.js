import React, {useEffect, useState, useContext} from 'react'
import Options from "../components/options";
import Map from "../components/map";
import { CanvasContext } from '../context/CanvasProvider';
import Header from '../components/header';


const CanvasEditor = () => {

  const {canvas} = useContext(CanvasContext);
  const [currentColor, setCurrentColor] = useState("#FFF");

  console.log(canvas)

  return (
    <div className='flex flex-col justify-center items-center'>
        <Header/>
        <div className='mt-12 flex justify-center items-center'>
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
