import { FC } from "react";
import { CardB, CardF, CardH, CardSubH, CardW } from "./style";
import { ICardProps } from "./types";
import { Divider } from "../Divider";

export const Card: FC<ICardProps> = (props) => {
  const { header, subHeader, body, footer } = props;
  return (
    <CardW>
      <CardH>{header}</CardH>
      <CardSubH>{subHeader}</CardSubH>
      <CardB>{body}</CardB>
      <CardF>{footer}</CardF>
    </CardW>
  );
};
