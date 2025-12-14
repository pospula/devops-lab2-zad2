import { render, screen, fireEvent } from '@testing-library/react'
import App from '../src/App'

describe('App component', () => {
  test('renders with count 0', () => {
    render(<App />)
    expect(true).toBe(false)
  })

  test('increments count when button clicked', () => {
    render(<App />)

    const button = screen.getByRole('button')
    fireEvent.click(button)

    expect(screen.getByText(/count is 1/i)).toBeInTheDocument()
  })
})
