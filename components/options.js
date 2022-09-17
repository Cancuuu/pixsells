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
      </div>
  )  
}

export default Options