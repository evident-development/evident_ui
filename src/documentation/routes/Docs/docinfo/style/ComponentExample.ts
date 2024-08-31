import styled from "styled-components";
interface ExampleSections {
  $flex?: boolean;
}
export const ExampleSections = styled.section<ExampleSections>`
  margin-bottom: 8px;
  display: ${({ $flex }) => ($flex ? "flex" : "block")};
  gap: 0 8px;
`;
