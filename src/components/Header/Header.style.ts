import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 90%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;
export const Row = styled.div`
  display: flex;
  column-gap: 1.25rem;
  align-items: center;

  @media (max-width: 380px) {
    &:last-child {
      display: none;
    }
  }
`;
export const Wrapper = styled.div`
    background-color: rgb(21, 21, 21);
    width: 100%;
    height: 100%;
    display:flex
    justify-content: center;
    align-items: center;
`;
export const BuscarInputContainer = styled.div`
  width: 275px;
  height: 30px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
`;

export const Menu = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
`;

export const MenuRight = styled.a`
  font-family: "Open Sans";
  font-style: normal;
  font-size: 12px;
  line-height: 25px;
  color: #ffffff;
  margin-right: 12px;
  text-decoration: none;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 22px;
  border: 3px solid #ffffff;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #ffffff;
  outline: none;
  padding: 0 0.5rem;
`;
