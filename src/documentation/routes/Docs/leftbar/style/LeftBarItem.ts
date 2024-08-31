import styled from 'styled-components';

interface ILeftBarItem {
  $isActive: boolean;
}
export const LeftBarItem = styled.li<ILeftBarItem>`
  user-select: none;
  width: 100%;
  padding: 2px 0 0 4px;
  box-sizing: border-box;
  color: #2e3236;
  &:hover {
    color: ${({ $isActive }) => ($isActive ? '' : 'blueviolet')};
    cursor: pointer;
    border-radius: 2px;
  }
  background-color: ${({ $isActive }) =>
    $isActive ? '#d6d9dc' : 'transparent'};
  transition: all ease 0.5s;
`;
