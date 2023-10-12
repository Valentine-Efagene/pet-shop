import discovery from "../../assets/img/discovery.png";
import Card from "../discovery/Card";

export default function Discovery() {
  return (
    <div className="flex flex-col-reverse md:flex-row gap-3 mt-6 p-sm md:p-md lg:p-lg">
      <img
        className="aspect-480/600 rounded-[40px] md:w-[278px] lg:w-[480px]"
        src={discovery}
        alt=""
        loading="lazy"
      />
      <div className="flex flex-col justify-center md:p-[21px] gap-3 md:rounded-[40px] md:border md:border-1 border-lightBorder">
        <Card
          title="Discover Our Top Products"
          content="We offer a wide range of high quality pet products and accessories to keep your furry friends happy and healthy. Ranging from premium pet food to stylish collars and toys, we have everything you need."
        />
        <Card
          title="Shop with Confidence"
          content="At our pet shop, we prioritize quality and safety. Our products are carefully selected from trusted brands to ensure the well-being of your pets. You can shop with confidence knowing that you are getting the best for your furry companions."
        />
        <Card
          title="Expert Advice Available"
          content="Need guidance on choosing the right products for your pets? Our knowledgeable staffs are here to help, be it questions about pet nutrition or recommendations fo grooming supplies, we are ready to provide expert advice."
        />
      </div>
    </div>
  );
}
