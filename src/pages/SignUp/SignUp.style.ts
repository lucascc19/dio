import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  height: calc(100vh - 60px);

  display: flex;
  flex-wrap: wrap;
  column-gap: 1.75rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 800px) {
    max-width: 90%;
  }
`;
export const Wrapper = styled.div`
  min-width: 300px;
  max-width: 340px;
`;
export const Column = styled.div`
  &:first-child {
    width: 100%;
    max-width: 500px;
    @media (max-width: 650px) {
      zoom: 60%;
    }
    @media (max-width: 597px) {
      width: 100%;
      max-width: none;
      display: flex;
      justify-content: center;
    }
  }
  @media (max-width: 1050px) {
    zoom: 70%;
  }
  @media (max-width: 597px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
export const Title = styled.h2`
  font-weight: 700;
  font-size: 32px;
  max-width: 90%;
  line-height: 44px;
  color: #ffffff;
`;
export const TitleLogin = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 8px;
`;
export const SubtitleLogin = styled.p`
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 35px;
`;
export const CreateAccount = styled.p`
  display: flex;
  gap: 0.25rem;
`;
export const Text = styled.p`
  display: flex;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
`;
export const SignIn = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  color: #23dd7a;
  cursor: pointer;
`;