import styled from "styled-components";

export const AboutW = styled.div`
  grid-area: view;
  align-self: center;
  justify-self: center;
  display: grid;
  grid-template-areas: "collaborators adv";
  grid-template-columns: auto auto;
  grid-template-rows: auto;
`;

export const AboutAdW = styled.div`
  grid-area: adv;
  border: 1px solid black;
  height: 400px;
  width: 400px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  flex-direction: column;
  box-shadow: 22px 21px 0px rgba(0, 0, 0, 0.2);
`;

export const AboutColoboratorW = styled.div`
  grid-area: collaborators;
  padding: 16px;
  color: #2e3847;
  & > div:first-child {
    font-size: 20px;
    font-weight: 600;
  }
`;

interface IAboutAdTextWProps {
  $color: string;
  $fontSize: number;
}
export const AboutAdTextW = styled.span<IAboutAdTextWProps>`
  color: ${({ $color }) => $color};
  font-size: ${({ $fontSize }) => $fontSize + "px"};
`;
