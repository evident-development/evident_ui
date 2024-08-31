import { FC } from "react";
import { Textonly, DefaultView } from "./style";
import { IBtnProps } from "../types";

export const PlainButton: FC<IBtnProps> = (props) => {
  const { label, size, look, onClick, id, kind } = props;
  switch (look) {
    case "withborder":
      return (
        <DefaultView
          onClick={onClick}
          id={id}
          $size={size}
          $kind={kind ?? "default"}
        >
          {label}
        </DefaultView>
      );
    case "textonly":
      return (
        <Textonly
          onClick={onClick}
          id={id}
          $size={size}
          $kind={kind ?? "default"}
        >
          {label}
        </Textonly>
      );
  }
};
