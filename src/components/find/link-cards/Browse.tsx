import ArrowRight from "../../common/icons/ArrowRight";

export default function Browse() {
  return (
    <a
      href="/"
      className="group flex flex-col relative text-light aspect-[23/14.5] w-full md:w-[23rem] lg:w-[39.5rem] bg-cover bg-no-repeat bg-[url('/img/browse.jpeg')] rounded-[2.25rem] justify-center items-center"
    >
      <ArrowRight className="group-hover:animate-jerk absolute right-6 top-6" />
      <h3 className="group-hover:text-neutral-300 duration-300 font-bold text-24 lg:text-40">
        Browse Our Pet Collection
      </h3>
      <p className="text-10 md:text-12 lg:text-20 group-hover:text-neutral-300">
        Choose from a variety of adorable and healthy pets.
      </p>
    </a>
  );
}
