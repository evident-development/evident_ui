import styled from 'styled-components';
interface ITableDataProps {
  $width: string;
}
export const TableData = styled.td<ITableDataProps>`
  padding: 4px;
  width: ${({ $width }) => ($width ? $width : 'auto')};
  word-wrap: break-word;
  border-radius: 2px;
`;
