import { ButtonContainer } from "./Button.style";

interface IButton {
  title: string;
  variant: string;
  onClick?: () => void;
}

export const Button: React.FC<IButton> = ({ ...props }) => {
  return (
    <ButtonContainer variant={props.variant} onClick={props.onClick}>
      {props.title}
    </ButtonContainer>
  );
};
