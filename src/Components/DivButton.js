import React from 'react'
import './DivComponent.css'
// import { IconContext } from "react-icons";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from 'react-icons/bs'

export default function DivButton({handleDirection, direction}) {
  const handleIcons = direction => {
    switch (direction) {
      case 'right':
        return <BsFillArrowRightCircleFill />
      case 'left':
        return <BsFillArrowLeftCircleFill />
      case 'up':
        return <BsFillArrowUpCircleFill />
      case 'down':
        return <BsFillArrowDownCircleFill />
      default:
        console.log('no direction')
    }
  }

  return (
    <button
      onClick={() => handleDirection(direction)}
      className={`button_${direction}`}
    >
      {handleIcons(direction)}
    </button>
  )
}
