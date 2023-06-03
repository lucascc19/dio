import styled from "styled-components";

interface ColumnProps {
  flex?: number;
}

export const Container = styled.main`
  width: 100%;
  max-width: 90%;
  margin: 2.5rem auto;
  display: flex;
  column-gap: 7.5rem;
  flex-direction: row;
  justify-content: space-between;
`;
export const Title = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 1.75rem;
  line-height: 25px;
  color: #ffffff;
  margin-bottom: 1.75rem;
`;
export const TitleHighlight = styled.h3`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff70;
  margin-bottom: 24px;
`;
export const Column = styled.div<ColumnProps>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
  "&:first-child": {
    display: flex;
  }
`;
