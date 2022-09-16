import React, {useEffect, useState, useRef} from 'react'
import Options from "../components/options";
import Map from "../components/options";

const CanvasEditor = () => {
  const [currentColor, setCurrentColor] = useState("#000")

  return (
    <div className="mapEditorContainer">
      <Options handleColor={(color) => setCurrentColor(color)}/>
      <Map currentColor={currentColor} />
    </div>
  );
}

export default CanvasEditor
