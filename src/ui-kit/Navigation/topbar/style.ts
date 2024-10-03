import styled, { isStyledComponent } from "styled-components";

export interface ITopbarW {
  $bgColor: string;
  $blured: boolean;
}

export const TopbarW = styled.nav<ITopbarW>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 64px;
  width: 100%;
  background-color: ${({ $bgColor, $blured }) => {
    if ($blured) {
      return ($bgColor || "#173f80") + "BF";
    }
    return $bgColor || "#173f80";
  }};
  color: #ffffff;
  position: sticky;
  top: 0px;
  z-index: 5;
  backdrop-filter: blur(5px);
`;

export const TopbarLogoW = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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

interface ITopbarLink {
  $isActive: boolean;
}
export const TopbarLink = styled.li<ITopbarLink>`
  color: ${({ $isActive }) => ($isActive ? "#ffffff" : "#d7dade")};
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
  display: ${({ $isSearchPanel }) => ($isSearchPanel ? "block" : "none")};
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 6px 8px;
  margin-right: 24px;
`;
