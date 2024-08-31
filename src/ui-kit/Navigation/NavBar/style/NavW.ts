import styled from "styled-components";

export const NavW = styled.nav<{
  $bgrnd?: string;
  $clr?: string;
  $wdth?: string;
  $hgth?: string;
}>`
  position: sticky;
  background: ${(props) => props.$bgrnd || "#565f6f"};
  color: ${(props) => props.$clr || "#ffffff"};
  width: ${(props) => props.$wdth || "100%"};
  height: ${(props) => props.$hgth || "64px"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;

  top: 0;
`;
