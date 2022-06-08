import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Header = ({ ...props }: IProps) => {
  return <header {...props}>Header</header>;
};

export default Header;
