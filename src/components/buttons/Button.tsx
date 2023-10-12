import { ButtonHTMLAttributes, ReactElement } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rightIcon?: ReactElement;
  children?: ReactElement | string;
  leftIcon?: ReactElement;
}

export default function Button({
  className,
  leftIcon,
  rightIcon,
  children,
}: IProps) {
  return (
    <button className={`${className}`}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
