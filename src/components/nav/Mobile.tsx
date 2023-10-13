import { HTMLAttributes } from "react";
import Menu from "../common/icons/Menu";
import Button from "../common/buttons/Button";

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
        <img src="/img/logo.svg" alt="" />
      </a>
      <Button>
        <Menu />
      </Button>
    </nav>
  );
}
