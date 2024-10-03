import styled from "styled-components";
interface HeaderWProps {
  $gridArea?: string;
}

export const HeaderW = styled.header<HeaderWProps>`
  grid-area: ${(props) => props.$gridArea || ""};
  position: sticky;
  top: 0;
  z-index: 10;
`;
