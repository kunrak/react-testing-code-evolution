import { render, screen } from '@testing-library/react'
import Greet from './greet'

test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/Hello/i)
  expect(textElement).toBeInTheDocument()
})

// test("Greet renders with a name", () => {
//   render(<Greet name="Rakesh" />);
//   const textElement = screen.getByText("Hello Rakesh");
//   expect(textElement).toBeInTheDocument();
// });
