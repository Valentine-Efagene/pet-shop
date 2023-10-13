import { HTMLAttributes } from "react";
import Menu from "../common/icons/Menu";
import Button from "../common/buttons/Button";
import Logo from "../common/icons/Logo";

export default function Mobile({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <nav
      className={`${className} flex items-center justify-between md:hidden z-10 px-[1rem] w-full`}
      {...rest}
    >
      <a>
        <Logo />
      </a>
      <Button>
        <Menu />
      </Button>
    </nav>
  );
}
