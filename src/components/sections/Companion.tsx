import dog from "../../assets/img/companion.png";
import SectionDetail from "../common/SectionDetail";

export default function Companion() {
  return (
    <section className="flex flex-col md:flex-row gap-sm md:gap-md lg:gap-lg px-sm md:px-md lg:px-lg">
      <SectionDetail>
        <h2 className="font-bold text-24 md:text-36 lg:text-64">
          Find Your Perfect Pet Companion Today
        </h2>
        <p className="text-12 md:text-16 lg:text-16">
          At our pet shop, we offer a wide variety of pets, from playful puppies
          to cuddly kittens. Whether you&apos;re looking for a loyal companion
          or a furry friend to brighten your day, we have the perfect pet for
          you.{" "}
        </p>
      </SectionDetail>
      <img
        className="aspect-380/475 rounded-[40px] md:w-[278px] lg:w-[480px]"
        src={dog}
        alt=""
        loading="lazy"
      />
    </section>
  );
}
