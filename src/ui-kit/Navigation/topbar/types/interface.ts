export interface ITopbarProps {
  bgColor?: string;
  logo?: React.ReactNode;
  isSignPanel?: boolean;
  onSignin?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  onSignup?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  navitems?: NavItem[];
  isSearchPanel?: boolean;
  searchPlaceHolder?: string;
  onSearch?: (event?: React.SyntheticEvent<HTMLElement>) => void;
  linksColor?: string;
  onLogo?: (event?: React.SyntheticEvent<HTMLElement>) => void;
}
export interface NavItem {
  title: string;
  onClick?: (route?: string, p?: number) => void;
  isActive?: boolean;
  route?: string;
}
