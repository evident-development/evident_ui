import styled from "styled-components";

export const AboutW = styled.div`
  grid-area: view;
  align-self: center;
  justify-self: center;
`;

export const AboutAdW = styled.div`
  border: 1px solid black;
  height: 336px;
  width: 400px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-direction: column;
  box-shadow: 22px 21px 0px rgba(0, 0, 0, 0.2);
`;

interface IAboutAdTextWProps {
  $color: string;
  $fontSize: number;
}
export const AboutAdTextW = styled.span<IAboutAdTextWProps>`
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize + "px"};
`;
