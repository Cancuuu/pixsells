import React, { useEffect } from "react";

const Options = ({handleColor}) => {
  
  const handleDefaultColor = (color) => {
    handleColor(color)
  }

  return (
    <div className="optionsContainer">
        <h1>Tile editor</h1>
        <div className="customColorContainer">
          <span>Tile Color (HEX)</span>
          <input className="input" type="text" placeholder="#123" onChange={(e) => {
              console.log(e.target.value)
              handleColor(e?.target?.value)
            }}/>
        </div>
        <div className="defaultColorContainer">
          <div 
            className="square"
            style={{"backgroundColor": "red"}} 
            onClick={() => handleDefaultColor('red')}>
          </div>
          <div 
            className="square" 
            style={{"backgroundColor": "blue"}} 
            onClick={() => handleDefaultColor('blue')}>
          </div>
          <div 
            className="square"
            style={{"backgroundColor": "white"}}
            onClick={() => handleDefaultColor('white')}>
          </div>
          <div
            className="square" 
            style={{"backgroundColor": "black"}} 
            onClick={() => handleDefaultColor('black')}>
          </div>
          <div 
            className="square"
            style={{"backgroundColor": "green"}} 
            onClick={() => handleDefaultColor('green')}>
          </div>
        </div>
      </div>
  )  
}

export default Options