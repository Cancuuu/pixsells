import { useEffect, useRef, useState } from "react";

const Map = (currentColor) => {
const [canvas, setCanvas] = useState();
const [context, setContext] = useState();

  const map = useRef(null);

  let mapArr = [
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ],
    [
      '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF', '#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF','#FFF'
    ]
  ];

  let assetWidth = 16;
  let assetHeight = 16;
  let mapWidth = assetWidth * 40;
  let mapHeight = assetHeight * 20;

  const [mapCanvas, setMapCanvas] = useState('');
  const [mapCtx, setMapCtx] = useState('');
  const mapData = mapArr;

  const loadMap = (mapData) => {
    for (let i = 0; i < mapData.length; i++) {
      let rowPixel = mapData[i];
      let rowNumber = i;

      for (let x = 0; x < rowPixel.length; x++) {
        let color = rowPixel[x];
        let tileNumber = x;

        this.renderPixel(
          color,
          tileNumber * this.assetWidth,
          rowNumber * this.assetHeight
        );
      }
    }
  }

  const renderPixel = (color, x, y) => {
    context.beginPath();
    context.rect(x, y, this.assetWidth, this.assetHeight);
    context.fillStyle = color;
    context.fill();
  }

  const getMousePos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = Math.floor((e.clientX - rect.left) / this.assetWidth) * this.assetWidth;
    const y = Math.floor((e.clientY - rect.top) / this.assetHeight) * this.assetHeight;
    renderPixel(currentColor, x, y);
  }

  useEffect(() => {
    if (canvas && context) {
      loadMap(mapArr);
    }
  }, [canvas, context])

  useEffect(() => {
    const canvas = map.current
    const context = canvas.getContext('2d');
    setCanvas(canvas);
    setContext(context)
  }, []);


  return (
    <div className="mapContainer">
      <canvas ref={map} width={this.mapWidth} height={this.mapHeight} onClick={(e) => getMousePos(e)}/>
    </div>
  )
}

export default Map