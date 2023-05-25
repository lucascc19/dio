import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1.75rem;
  border-radius: 0.5rem;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      min-width: 167px;
      height: 33px;
      background: transparent;
      border: 1px solid #FFF;
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      min-width: 167px;
      height: 33px;
      background: #E4105D;
      border: none
    `}
`;


