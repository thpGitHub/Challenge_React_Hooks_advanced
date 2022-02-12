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
        return <BsFillArrowRightCircleFill data-testid="Arrow-Right" />
      case 'left':
        return <BsFillArrowLeftCircleFill data-testid="Arrow-Left" />
      case 'up':
        return <BsFillArrowUpCircleFill data-testid="Arrow-Up" />
      case 'down':
        return <BsFillArrowDownCircleFill data-testid="Arrow-Down" />
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
