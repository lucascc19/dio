import { ButtonContainer } from "./Button.style";

interface IButton {
  title: string;
  type?: "button" | "submit" | "reset" | undefined;
  variant: string;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({
  title,
  type,
  variant,
  onClick,
}) => {
  return (
    <ButtonContainer type={type} variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};