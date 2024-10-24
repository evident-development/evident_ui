import styled from "styled-components";

export const InputW = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const LabelW = styled.label`
  font-size: 13px;
  color: #646566;
  margin-left: 2px;
`;
export const InputF = styled.input`
  padding: 8px 8px;
  outline: none;
  border: none;
  border-radius: 4px;
  &::placeholder {
    font-size: 12px;
  }
  &:focus {
    box-shadow: 0px 0px 8px 0px rgba(34, 60, 80, 0.2);
  }
`;
export const InputM = styled.span`
  font-size: 11px;
  margin-top: 4px;
  margin-left: 2px;
`;
