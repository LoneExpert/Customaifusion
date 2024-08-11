import React from 'react'
import {SketchPicker} from "react-color";
import { useSnapshot } from 'valtio'

import state from '../Store'

const ColorPicker = () => {

  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker
        color={snap.color}
        disableAlpha
        onChange={(color) => state.color = color.hex}
        // presetColors={["#ccc","#000"]} // add more colors if needed
      />
    </div>
  )
}

export default ColorPicker