import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    // Add assertions based on what your App component should display
    // For example:
    // expect(screen.getByText(/your text/i)).toBeInTheDocument()
  })
})