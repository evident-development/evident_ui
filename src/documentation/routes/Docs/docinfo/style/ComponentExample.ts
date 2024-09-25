import styled from "styled-components";
interface ExampleSections {
  $flex?: boolean;
}
export const ExampleSections = styled.section<ExampleSections>`
  margin: 8px 0;
  display: ${({ $flex }) => ($flex ? "flex" : "block")};
  gap: 0 8px;
`;
