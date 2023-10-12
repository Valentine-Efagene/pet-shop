import family from "../../assets/img/family.png";

export default function Family() {
  return (
    <div className="flex flex-col md:flex-row gap-3 mt-6 p-sm md:p-md lg:p-lg">
      <div className="flex flex-col justify-center md:p-sm gap-2 md:rounded-[40px] md:border md:border-1 border-lightBorder">
        <h2 className="font-bold text-24 md:text-36 lg:text-64">
          Find Your Perfect Pet Companion Today
        </h2>
        <p className="text-12 md:text-16 lg:text-16">
          At our pet shop, we offer a wide variety of pets, from playful puppies
          to cuddly kittens. Whether you&apos;re looking for a loyal companion
          or a furry friend to brighten your day, we have the perfect pet for
          you.{" "}
        </p>
      </div>
      <img
        className="aspect-480/600 rounded-[40px] md:w-[278px] lg:w-[480px]"
        src={family}
        alt=""
        loading="lazy"
      />
    </div>
  );
}
