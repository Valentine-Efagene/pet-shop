import Copyright from "../common/icons/Copyright";
import Facebook from "../common/icons/Facebook";
import Instagram from "../common/icons/Instagram";
import Logo from "../common/icons/Logo";
import Pinterest from "../common/icons/Pinterest";
import Telegram from "../common/icons/Telegram";
import X from "../common/icons/X";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-dark p-md">
      <div className="flex justify-between">
        <a href="/">
          <Logo />
        </a>
        <div className="flex gap-[0.5rem]">
          <a href="">
            <Pinterest />
          </a>
          <a href="">
            <Instagram />
          </a>
          <a href="">
            <Facebook />
          </a>
          <a href="">
            <Telegram />
          </a>
          <a href="">
            <X />
          </a>
        </div>
      </div>
      <hr className="border-t-1 border-light my-[0.5rem]" />
      <div className="flex gap-sm mx-[auto]">
        <Copyright />
        <span className="font-medium text-8 text-light">
          2023, All Right Reserved.
        </span>
      </div>
    </footer>
  );
}
