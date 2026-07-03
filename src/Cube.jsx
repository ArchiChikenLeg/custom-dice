
import CubeSide from './CubeSide.jsx'
import { useState } from 'react'

function Cube({ sides, onChangeBg }) {

  return (
    <div className="cube">
      {sides.map((side) => (
        <CubeSide
          key={side.id}
          side={side}
          onChangeBg={onChangeBg}
        />
      ))}
    </div>
  )
}

export default Cube
