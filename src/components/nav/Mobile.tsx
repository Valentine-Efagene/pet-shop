import Button from "../common/buttons/Button";
import Menu from "../icons/Menu";

interface IProps {
  className?: string;
}

export default function Mobile({ className }: IProps) {
  return (
    <div
      className={`${className} flex items-center justify-between md:hidden z-10 px-[1rem] w-full`}
    >
      <Button>
        <img src="/img/logo.svg" alt="" />
      </Button>
      <Button>
        <Menu />
      </Button>
    </div>
  );
}
