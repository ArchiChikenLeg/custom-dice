import { useState } from 'react'
import Cube from './Cube.jsx'
import Arena from './Arena.jsx'

import './App.css'

function App() {
const [cube1Sides, setCube1Sides] = useState([
    { id: 1, bgUrl: null },
    { id: 2, bgUrl: null },
    { id: 3, bgUrl: null },
    { id: 4, bgUrl: null },
    { id: 5, bgUrl: null },
    { id: 6, bgUrl: null }
  ])

  const [cube2Sides, setCube2Sides] = useState([
    { id: 1, bgUrl: null },
    { id: 2, bgUrl: null },
    { id: 3, bgUrl: null },
    { id: 4, bgUrl: null },
    { id: 5, bgUrl: null },
    { id: 6, bgUrl: null }
  ])

  const updateCubeSide = (cubeNumber, id, bgUrl) => {
    const setter = cubeNumber === 1 ? setCube1Sides : setCube2Sides
    const current = cubeNumber === 1 ? cube1Sides : cube2Sides

    setter(current.map((side) =>
      side.id === id ? { ...side, bgUrl } : side
    ))
  }

  return (
    <div className="App">
      <Cube
        cubeName="cube1"
        sides={cube1Sides}
        onChangeBg={(id, bgUrl) => updateCubeSide(1, id, bgUrl)}
      />
      <Arena cubes={[cube1Sides, cube2Sides]}/>
      <Cube
        cubeName="cube2"
        sides={cube2Sides}
        onChangeBg={(id, bgUrl) => updateCubeSide(2, id, bgUrl)}
      />
    </div>
  )
}

export default App
