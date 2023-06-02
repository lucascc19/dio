import styled from "styled-components";

export const Container = styled.main`
  height: calc(100vh - 60px);
  width: 100%;
  max-width: 90%;
  margin: 0 auto;

  display: flex;
  gap: 2.75rem;
  align-items: center;
  justify-content: space-between;
`;
export const Section = styled.section`
  &:first-child {
    width: 450px;
  }
  @media (max-width: 1134px) {
    &:last-child {
      zoom: 70%;
    }
  }
  @media (max-width: 800px) {
    &:last-child {
      display: none;
    }
  }
  @media (max-width: 380px) {
    &:first-child {
      zoom: 70%;
    }
  }
`;
export const Title = styled.h2`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 20px;
  line-height: 44px;

  color: #ffffff;
`;
export const TitleHighlight = styled.span`
  color: #e4105d;
`;
export const TextContent = styled.p`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 22px;

  margin-bottom: 20px;

  color: #ffffff;
`;
