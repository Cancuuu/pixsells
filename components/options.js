import React from "react";

const Options = ({handleColor}) => {
  
  const handleDefaultColor = (color) => {
    handleColor(color)
  }

  return (
    <div className="optionsContainer">
        <div className="customColorContainer">
          <span>Tile Color (HEX)</span>
          <input className="text-black" type="text" placeholder="#123" onChange={(e) => handleColor(e.target.value) }/>
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