import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface IProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

const Sidebar = ({ ...props }: IProps) => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
