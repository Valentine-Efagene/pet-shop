import Adopt from "../find/link-cards/Adopt";
import Browse from "../find/link-cards/Browse";
import Shop from "../find/link-cards/Shop";

export default function Find() {
  return (
    <div className="flex flex-col gap-sm md:gap-md px-sm md:px-md lg:px-lg">
      <div className="flex flex-col md:items-center gap-2 mx-[auto] w-fit text-center">
        <h2 className="font-bold text-20 md:text-36 lg:text-64">
          Find the Perfect Pet Today!
        </h2>
        <p className="font-normal text-10 md:text-12 lg:text-16 w-[40ch] md:w-[73ch]">
          At our pet shop, we make the process of purchasing a pet or product
          easy and enjoyable. With a wide selection of pets and high-quality
          products, you will find everything you need to care for your furry
          friends.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-sm justify-center items-center">
        <Browse />
        <Shop />
        <Adopt />
      </div>
    </div>
  );
}
