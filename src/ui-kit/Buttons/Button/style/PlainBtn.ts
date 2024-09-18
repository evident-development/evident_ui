import styled from "styled-components";
import { IBtnKind, IBtnStyleProps } from "../../types";

export const Textonly = styled.button<IBtnStyleProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border: none;
  background: red;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const getColor = ($kind: IBtnKind) => {
  switch ($kind) {
    case "transparent":
    case "filled": {
      return "#000000";
    }
    default:
      return "#ffffff";
  }
};
const getBgColor = ($kind: IBtnKind) => {
  switch ($kind) {
    case "success": {
      return "#8fce00";
    }
    case "danger": {
      return "#e06666";
    }
    case "warning": {
      return "#e69138";
    }
    case "disable": {
      return "#bcbcbc";
    }
    case "transparent": {
      return "transparent";
    }
    case "filled": {
      return "transparent";
    }
    case "unfilled": {
      return "#313036";
    }
    default: {
      return "#2faced";
    }
  }
};

export const DefaultView = styled.button<IBtnStyleProps>`
  background-color: ${({ $kind }) => getBgColor($kind)};
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  color: ${({ $kind }) => getColor($kind)};
  opacity: 0.8;
  border: ${({ $kind }) => {
    switch ($kind) {
      case "transparent":
      case "filled":
        return "1px solid #bcbcbc";
      default:
        return "1px solid transparent";
    }
  }};
  &:hover {
    transition: 0.3s;
    color: ${({ $kind }) => {
      switch ($kind) {
        case "transparent":
        case "unfilled":
          return "#000000";
        default:
          return "#e5e5e5";
      }
    }};
    background-color: ${({ $kind }) => {
      switch ($kind) {
        case "filled":
          return "#313036";
        case "unfilled":
          return "transparent";
        default:
          return "none";
      }
    }};
    border: ${({ $kind }) => {
      switch ($kind) {
        case "transparent":
        case "unfilled":
          return "1px solid #000000";
        default:
          return "1px solid transparent";
      }
    }};
    opacity: 1;
    cursor: pointer;
  }
`;
