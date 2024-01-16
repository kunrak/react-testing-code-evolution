import { render, screen } from '@testing-library/react'
import Counter from './counter'
import user from '@testing-library/user-event'
import userEvent from '@testing-library/user-event'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)

    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  test('renders a count of 0', () => {
    render(<Counter />)

    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  test('renders a count of 1 after clicking the increment button', async () => {
    // user.setup();
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.click(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('renders a count of 2 after clicking the increment button twice', async () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await user.dblClick(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  test('renders a count of 10 after clicking the set button', async () => {
    render(<Counter />)
    const amoutInput = screen.getByRole('spinbutton')
    await user.type(amoutInput, '10')
    expect(amoutInput).toHaveValue(10)
    const setButton = screen.getByRole('button', {
      name: 'Set',
    })
    await user.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  test('elements are focused in the right order', async () => {
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    const amoutInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })

    await user.tab()
    expect(incrementButton).toHaveFocus()

    await user.tab()
    expect(amoutInput).toHaveFocus()

    await user.tab()
    expect(setButton).toHaveFocus()
  })
})
