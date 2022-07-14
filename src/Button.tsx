import React from "react"
import { ButtonContainer } from "./styles"


interface ButtonProps {
text: string
}
export const Button = ({ text }: ButtonProps) => {
return <ButtonContainer>{text}</ButtonContainer>
}
