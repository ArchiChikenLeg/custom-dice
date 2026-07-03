import { useState } from 'react'
import './App.css'

function Arena({ cubes }) {
  const [cube1, cube2] = cubes
  const [rollResult, setRollResult] = useState({ cube1: null, cube2: null })
    const roll = () => {
        const randomIndex1 = Math.floor(Math.random() * cube1.length);
        const randomIndex2 = Math.floor(Math.random() * cube2.length);
        const side1 = cube1[randomIndex1];
        const side2 = cube2[randomIndex2];
        console.log(`Cube 1 rolled: ${side1.id}, Cube 2 rolled: ${side2.id}`);
        setRollResult({ cube1: side1.id, cube2: side2.id });
    }
    
  return (
    <div className="arena">
        <div className="arena-cubes">
            <div className="arena-cube" style={{ backgroundImage: `url(${rollResult.cube1 ? cube1[rollResult.cube1 - 1].bgUrl : null})` }}></div>
            <div className="arena-cube" style={{ backgroundImage: `url(${rollResult.cube2 ? cube2[rollResult.cube2 - 1].bgUrl : null})` }}></div>
        </div>
        <button onClick={roll}>Roll</button>
    </div>
  )
}

export default Arena
