import Copyright from "../common/icons/Copyright";
import Facebook from "../common/icons/Facebook";
import Instagram from "../common/icons/Instagram";
import Logo from "../common/icons/Logo";
import Pinterest from "../common/icons/Pinterest";
import Telegram from "../common/icons/Telegram";
import X from "../common/icons/X";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-dark py-md px-sm md:px-md lg:px-lg">
      <div className="flex justify-between items-center">
        <a href="/">
          <Logo className="scale-100" />
        </a>
        <div className="flex mr-[1rem] gap-[1.5rem]">
          <a href="">
            <Pinterest className="scale-[2] lg:scale-[2.5]" />
          </a>
          <a href="">
            <Instagram className="scale-[2] lg:scale-[2.5]" />
          </a>
          <a href="">
            <Facebook className="scale-[2] lg:scale-[2.5]" />
          </a>
          <a href="">
            <Telegram className="scale-[2] lg:scale-[2.5]" />
          </a>
          <a href="">
            <X className="scale-[2] lg:scale-[2.5]" />
          </a>
        </div>
      </div>
      <hr className="border-t-1 border-light my-[0.5rem] md:my-sm" />
      <div className="flex gap-sm mx-[auto] items-center">
        <Copyright className="lg:scale-[1.5]" />
        <span className="font-medium text-8 md:text-16 text-light">
          2023, All Right Reserved.
        </span>
      </div>
    </footer>
  );
}
