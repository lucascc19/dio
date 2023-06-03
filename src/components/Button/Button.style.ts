import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant?: string;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  color: #fff;
  cursor: pointer;
  padding: 0.5rem 1.75rem;
  border-radius: 0.5rem;
  width: 100%;
  height: 33px;

  ${({ variant }) =>
    variant === "primary" &&
    css`
      background: transparent;
      border: 1px solid #fff;

      &:hover {
        background: #2e2e2e;
      }
    `}

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      background: #e4105d;
      border: none;

      &:hover {
        background: #e74a83;
      }
    `}
`;
