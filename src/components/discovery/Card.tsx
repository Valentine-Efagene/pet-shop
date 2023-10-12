import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  content: string;
}

export default function Card({ className, title, content, ...rest }: IProps) {
  return (
    <div className={`${className} flex flex-col gap-2`} {...rest}>
      <h2 className="font-bold text-24 md:text-28 lg:text-48">{title}</h2>
      <p className="text-12 md:text-12 lg:text-16">{content}</p>
    </div>
  );
}
