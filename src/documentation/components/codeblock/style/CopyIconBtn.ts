import styled from "styled-components";

interface CopyIconBtnProps {
  $copied: boolean;
}

export const CopyIconBtn = styled.i<CopyIconBtnProps>`
  font-size: 20px;
  color: ${({ $copied }) => ($copied ? "#83bdba" : "#565f6f")};
  user-select: none;
  &:hover {
    opacity: ${({ $copied }) => !$copied && 0.8};
    cursor: ${({ $copied }) => !$copied && "pointer"};
  }
`;
