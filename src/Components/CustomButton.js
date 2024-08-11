import React from 'react'
import state from "../Store";
import { useSnapshot } from 'valtio';
import {getContrastingColor} from '../config/helpers';

const CustomButton = ({type,title,customStyles,handleClick}) => {

    const snap = useSnapshot(state);

    const generateStyles = (type) => {
        if(type === 'filled') {
            return {
                backgroundColor: snap.color,
                color: getContrastingColor(snap.color),
            }
        }
        else if(type === 'outlined') {
            return {
                borderWidth: '1px',
                borderColor: snap.color,
                color: snap.color,
            }
        }

    }

  return (
    <button 
        className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
        style={generateStyles(type)}
        onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton