import { HTMLAttributes } from "react";

export default function SectionDetail(props: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className="flex flex-col justify-center md:p-sm lg:p-lgInner gap-2 lg:gap-lg md:rounded-[40px] md:border md:border-1 border-lightBorder"
    ></div>
  );
}
