import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3b3450;

  display: flex;
  align-items: center;
`;
export const IconContainer = styled.div`
  margin-right: 10px;
`;
export const InputText = styled.input`
  background-color: transparent;
  color: #ffffff;
  flex: 1;
  border: 0;
  height: 30px;
  outline: none;
`;
export const ErrorMessage = styled.p`
  color: #ff0000;
  font-size: 0.875rem;
`;
