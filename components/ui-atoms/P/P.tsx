import styles from "./P.module.css";
import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect } from "react";

export interface IProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: "s" | "m" | "l";
  children: ReactNode;
}

export const P = ({
  size = "m",
  children,
  className,
  ...props
}: IProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == "s",
        [styles.m]: size == "m",
        [styles.l]: size == "l",
      })}
      {...props}
    >
      {children}
    </p>
  );
};
