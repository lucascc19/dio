import { Container, NameText, Progress, UserPicture } from "./UserInfo.style";

interface UserInfoProps {
  nome: string;
  image: string;
  percentual: number;
}

export const UserInfo: React.FC<UserInfoProps> = ({
  nome,
  image,
  percentual,
}) => {
  return (
    <Container>
      <UserPicture src={image} />
      <div>
        <NameText>{nome}</NameText>
        <Progress percentual={percentual} />
      </div>
    </Container>
  );
};
