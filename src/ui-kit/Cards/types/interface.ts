import { ReactNode } from "react";

export interface ICardProps {
  header?: string;
  subHeader?: string;
  body?: string | ReactNode;
  footer?: string | ReactNode;
}
