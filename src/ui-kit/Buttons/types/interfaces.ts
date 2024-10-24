import { IBtnKind, IBtnLook, IBtnSize } from "./type";

export interface IBtnProps {
  label: string;
  onClick?: (event: React.SyntheticEvent<HTMLElement>) => void;
  size: IBtnSize;
  kind: IBtnKind;
  look: IBtnLook;
  id: string;
  className?: string;
  stretched?: boolean;
}

export interface IBtnStyleProps {
  $size?: IBtnSize;
  $kind?: IBtnKind;
  $look?: IBtnLook;
  $stretched?: boolean;
}
