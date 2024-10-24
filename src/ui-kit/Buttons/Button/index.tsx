import { FC } from "react";
import { Textonly, DefaultView } from "./style";
import { IBtnProps } from "../types";
import classNames from "classnames";

export const Button: FC<IBtnProps> = (props) => {
  const { label, size, look, onClick, id, kind, className, stretched } = props;
  switch (look) {
    case "withborder":
      return (
        <DefaultView
          onClick={onClick}
          id={id}
          $size={size}
          $kind={kind ?? "default"}
          className={className}
          $stretched={stretched}
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
          className={className}
        >
          {label}
        </Textonly>
      );
  }
};
