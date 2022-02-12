import DivButton from './DivButton'
import {render, screen} from '@testing-library/react'
// import {
//   BsFillArrowLeftCircleFill,
//   BsFillArrowRightCircleFill,
//   BsFillArrowDownCircleFill,
//   BsFillArrowUpCircleFill,
// } from 'react-icons/bs'

describe('DivButton Component', () => {
  let handleDirection = () => {
    console.log('direction')
  }

  it('Should render without crashing, direction = up', async () => {
    render(<DivButton handleDirection={handleDirection} direction="up" />)

    const element = screen.getByTestId('Arrow-Up')
    expect(element.getAttribute('data-testid')).toBe('Arrow-Up')
  })
  it('Should render without crashing, direction = down', async () => {
    render(<DivButton handleDirection={handleDirection} direction="down" />)

    const element = screen.getByTestId('Arrow-Down')
    expect(element.getAttribute('data-testid')).toBe('Arrow-Down')
  })
  it('Should render without crashing, direction = left', async () => {
    render(<DivButton handleDirection={handleDirection} direction="left" />)

    const element = screen.getByTestId('Arrow-Left')
    expect(element.getAttribute('data-testid')).toBe('Arrow-Left')
  })
  it('Should render without crashing, direction = right', async () => {
    render(<DivButton handleDirection={handleDirection} direction="right" />)

    const element = screen.getByTestId('Arrow-Right')
    expect(element.getAttribute('data-testid')).toBe('Arrow-Right')
  })
  it('Should render without crashing, direction = not good', async () => {
    render(
      <DivButton handleDirection={handleDirection} direction="sqdqsdqds" />,
    )
  })
})
