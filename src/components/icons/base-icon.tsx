import { FC } from "react";
import { SvgIcon } from "./base-icon.types";

export const BaseIcon: FC<SvgIcon> = ({
  children,
  viewBox = "0 0 24 24",
  ...rest
}) => {
  return (
    <svg viewBox={viewBox} {...rest}>
      {children}
    </svg>
  );
};

export default BaseIcon;
