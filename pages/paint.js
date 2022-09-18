import React, {useEffect, useState, useContext} from 'react'
import Options from "../components/options";
import Map from "../components/map";
import { CanvasContext } from '../context/CanvasProvider';
import Header from '../components/header';
import { SketchPicker } from 'react-color';



const CanvasEditor = () => {

  // const {canvas} = useContext(CanvasContext);
  const [currentColor, setCurrentColor] = useState("#000000");

  return (
    <div className='flex flex-col justify-center items-center'>
        <Header/>
        <div className='mt-12 flex justify-center'>
          <SketchPicker color={currentColor} onChange={(e) => setCurrentColor(e.hex)}  /> 
          <Map currentColor={currentColor} />
        </div>
    </div>
  );
}

export default CanvasEditor
