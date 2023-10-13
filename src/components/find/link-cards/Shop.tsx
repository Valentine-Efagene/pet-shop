export default function Shop() {
  return (
    <a
      href="/"
      className="group px-[14px] flex flex-col relative text-light aspect-[11.5/14.5] w-[11.5rem] lg:w-[19.75rem] bg-cover bg-no-repeat bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/img/shop.jpeg')] rounded-[2.25rem]  justify-end pb-[2rem] items-center"
    >
      <h3 className="group-hover:text-neutral-300 duration-300 font-bold text-16 lg:text-40 text-center">
        Shop for Pet Supplies
      </h3>
      <p className="text-10 lg:text-20 group-hover:text-neutral-300 text-center">
        Choose from a variety of adorable and healthy pets.
      </p>
    </a>
  );
}
