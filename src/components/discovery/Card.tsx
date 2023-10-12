import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLButtonElement> {
  title: string;
  content: string;
}

export default function Card({ title, content }: IProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="font-bold text-24 md:text-36 lg:text-48">{title}</h2>
      <p className="text-12 md:text-16 lg:text-16">{content}</p>
    </div>
  );
}
