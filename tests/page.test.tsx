import Home from "@/app/page"
import { render, screen } from "@testing-library/react"

describe("Page", () => {
  it('renders a main DOM element with "Hello World!"', () => {
    render(<Home />)

    const mainElement = screen.getByRole("main")
    expect(mainElement).toBeInTheDocument()
    expect(mainElement).toHaveTextContent("Hello World!")
  })
})
