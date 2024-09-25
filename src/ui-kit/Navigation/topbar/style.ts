import styled from "styled-components";

export interface ITopbarW {
  $bgColor: string;
}

export const TopbarW = styled.nav<ITopbarW>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 64px;
  width: 100%;
  background-color: ${({ $bgColor }) => $bgColor || "#367EDD"};
  color: #ffffff;
  position: sticky;
  top: 0px;
  z-index: 5;
`;

export const TopbarLogoW = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.8;
  }
`;

export const TopbarLinksW = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 0;
`;

export const TopbarLink = styled.li<{ $linksColor?: string }>`
  color: ${({ $linksColor }) => $linksColor || "#ffffff"};
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.8;
  }
`;

export interface ITopbarAuthWProps {
  $isSignPanel: boolean;
}
export const TopbarAuthW = styled.div<ITopbarAuthWProps>`
  display: ${({ $isSignPanel }) => ($isSignPanel ? "flex" : "none")};
  align-items: center;
  gap: 8px;
  user-select: none;
`;

export const TobparSignin = styled.div`
  user-select: none;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
export const TobparSignup = styled.div`
  background-color: #013480;
  border: 1px solid transparent;
  padding: 4px;
  border-radius: 6px;
  user-select: none;
  &:hover {
    border: 1px solid #dddddd;
    cursor: pointer;
  }
`;

interface ITopbarSearchProps {
  $isSearchPanel: boolean;
}
export const TopbarSearch = styled.input<ITopbarSearchProps>`
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 6px 8px;
  margin-right: 24px;
`;
