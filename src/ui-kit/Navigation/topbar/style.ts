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
`;

export const TopbarLogoW = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const TopbarLinksW = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  gap: 8px;
  padding: 0;
  margin: 0;
`;
export const TopbarLink = styled.li``;

export interface ITopbarAuthWProps {
  $isSignPanel: boolean;
}
export const TopbarAuthW = styled.div<ITopbarAuthWProps>`
  display: ${({ $isSignPanel }) => ($isSignPanel ? "flex" : "none")};
  align-items: center;
  gap: 8px;
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
