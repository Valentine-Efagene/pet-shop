interface IProps {
  className?: string;
}

export default function Desktop({ className }: IProps) {
  return (
    <div
      className={`${className} hidden md:flex z-10 py-5 pl-[1rem] lg:pl-[4rem] w-full`}
    >
      <a>
        <img src="/img/logo.svg" alt="" />
      </a>
      <div className="flex justify-center gap-3 grow gap-[20px] text-light items-center">
        <a href="">Shop Now</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Products</a>
      </div>
    </div>
  );
}
