import { ITestimonial } from "../../types";
import Card from "../testimonials/Card";

const testimonials: ITestimonial[] = [
  {
    name: "Joel",
    description: "Pet Owner",
    avatar: "/img/joel.png",
    comment:
      "Our experience with the pet shop has been amazing! They truly care about their customers and pets.",
  },
  {
    name: "Tunzi",
    description: "Animal Lover",
    avatar: "/img/tunzi.png",
    comment:
      "I can’t recommend the pet shop enough. Their staffs are knowledgeable and friendly, and have a great selection of products.",
  },
];

export default function Testimonials() {
  return (
    <section className="flex flex-col gap-sm lg:gap-lg px-sm md:px-md lg:px-lg">
      <div className="flex flex-col text-center items-center">
        <h2 className="font-bold text-[2.25rem] lg:text-[4rem]">
          Happy Customers
        </h2>
        <p className="font-normal text-12 lg:text-16">
          Read what our customers have to say about us.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between gap-md md:gap-[0]">
        {testimonials.map((testimonial) => (
          <Card testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
