import React, { MouseEvent } from "react";
import cx from "classnames";

type Props = {
  onClick: (e: MouseEvent) => void;
  className?: string;
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  children,
  className,
  onClick,
  disabled = false
}) => (
  <button
    className={cx("button", className, {
      button__disabled: disabled
    })}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);
