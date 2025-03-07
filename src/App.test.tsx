import { describe, it } from 'vitest'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    // Add assertions based on what your App component should display
    // For example:
    // expect(screen.getByText(/your text/i)).toBeInTheDocument()
  })
})