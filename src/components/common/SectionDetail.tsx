import { HTMLAttributes } from "react";

export default function SectionDetail({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`${className} flex flex-col justify-center md:p-sm lg:p-lgInner gap-2 lg:gap-lg md:rounded-[40px] md:border md:border-1 border-lightBorder`}
      {...rest}
    ></div>
  );
}
