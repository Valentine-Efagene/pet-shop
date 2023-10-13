import { HTMLAttributes } from "react";
import { ITestimonial } from "../../types";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  testimonial: ITestimonial;
}

export default function Card({ className, testimonial, ...rest }: IProps) {
  const { name, description, comment, avatar } = testimonial;

  return (
    <div className={`${className} flex flex-col gap-sm`} {...rest}>
      <p className="text-12 md:text-12 lg:text-16 md:w-[43ch] font-bold text-20">
        {comment}
      </p>
      <div className="flex gap-sm items-center">
        <img
          src={avatar}
          alt=""
          className="w-[5rem] aspect-square rounded-full"
        />
        <div className="font-medium text-16 flex flex-col gap-[0.2rem]">
          <p>{name}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
