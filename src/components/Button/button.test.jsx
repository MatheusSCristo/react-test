import {fireEvent, render,screen} from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Button from "./index"
import App from "../../App"


it("should render button",()=>{
    render(<Button/>)
    const buttonElement=screen.getByRole("button",{name:"Click"})
    expect(buttonElement).toBeInTheDocument()
})