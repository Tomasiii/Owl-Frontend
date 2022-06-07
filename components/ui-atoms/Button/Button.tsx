import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import style from "./button.module.css";
import cn from "classnames";
import ArrowIcon from "./arrow.svg";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
  arrow?: "right" | "down" | "none";
}

const Button = ({
  appearance,
  arrow = "none",
  children,
  className,
  ...props
}: IProps) => {
  return (
    <button
      className={cn(style.button, className, {
        [style.primary]: appearance === "primary",
        [style.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
      {arrow !== "none" && (
        <span className={cn(style.arrow, { [style.down]: arrow == "down" })}>
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
