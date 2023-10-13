export default function Adopt() {
  return (
    <a
      href="/"
      className="group px-[14px] flex flex-col relative text-light aspect-[11.5/14.5] w-[11.5rem] lg:w-[19.75rem] bg-cover bg-no-repeat bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/img/adopt.jpeg')] rounded-[2.25rem] justify-end pb-[2rem] items-center"
    >
      <h3 className="group-hover:text-neutral-300 duration-300 font-bold text-16 lg:text-40 text-center">
        Adopt a Pet Today
      </h3>
      <p className="text-10 lg:text-20 group-hover:text-neutral-300 text-center">
        Give a loving home to a pet in need.
      </p>
    </a>
  );
}
