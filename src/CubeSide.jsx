import { useState } from 'react'
import {useRef} from 'react'

function CubeSide({ side, onChangeBg }) {
    const[imgBG, setImgBG] = useState(null);
    const fileInputRef = useRef(null);


    const setBG = (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    const imageUrl = URL.createObjectURL(file)
    onChangeBg(side.id, imageUrl)
  }

const removeBG = (event) => {
    event.stopPropagation()
    onChangeBg(side.id, null)
  }

  return (
      <div
      className="cube-side"
      style={{ backgroundImage: side.bgUrl ? `url(${side.bgUrl})` : 'none' }}
    >
      <button onClick={() => fileInputRef.current.click()}>+</button>
      {side.bgUrl && (
        <button className="delete-btn" onClick={removeBG}>
          x
        </button>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={setBG}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export default CubeSide
