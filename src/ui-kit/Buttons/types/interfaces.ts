import { IBtnKind, IBtnLook, IBtnSize } from "./type";

export interface IBtnProps {
  label: string;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  size: IBtnSize;
  kind: IBtnKind;
  look: IBtnLook;
  id: string;
}

export interface IBtnStyleProps {
  $size?: IBtnSize;
  $kind?: IBtnKind;
  $look?: IBtnLook;
}
