import Button from "../buttons/Button";
import ArrowDown from "../icons/ArrowDown";
import Desktop from "../nav/Desktop";
import Mobile from "../nav/Mobile";

export default function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <div className={`w-full h-fit relative bg-white`}>
        <Desktop />
        <Mobile className="absolute top-4" />
        <div className="bg-background relative aspect-[412/326] md:aspect-[834/557] lg:aspect-[1440/1024] rounded-tl-[40px] rounded-tr-[40px] flex align-center w-full items-center bg-cover bg-no-repeat bg-[url('/img/hero-sm.png')] md:bg-[url('/img/hero-md.png')] lg:bg-[url('/img/hero.png')]">
          <div className="w-full relative top-8 md:static flex flex-col gap-2 md:gap-4 lg:gap-8 pl-[16px] md:pl-[32px] lg:pl-[64px]">
            <h1 className="w-[15ch] md:w-[17ch] font-bold text-light leading-normal text-24 md:text-36 lg:text-64">
              Welcome to our Pet Shop!
            </h1>
            <p className="w-[38ch] md:w-[46ch] lg:w-[55ch] text-light leading-normal text-8 md:text-12 lg:text-16">
              At our Pet Shop, We offer a wide range of products and services to
              keep your furry friends happy and healthy.
            </p>
            <Button className="w-fit text-10 md:text-10 md:text-14 bg-light rounded-full px-[24px] py-[8px] md:px-[24px] md:py-[12px] lg:px-[24px] lg:py-[12px]">
              Shop Now
            </Button>
          </div>
          <Button
            rightIcon={<ArrowDown />}
            className="hidden md:flex px-[2rem] w-1/5 md:py-[6px] lg:py-[1rem] bottom-0 left-4 absolute gap-[10px] justify-center items-center bg-transparent text-blue-700 font-semibold hover:text-white border border-blue-500 border-2 hover:border-transparent rounded-full "
          >
            Discover
          </Button>
        </div>
      </div>
      <Button className="flex mx-sm md:hidden w-1/5 font-normal justify-start items-center bg-transparent text-blue-700">
        Discover
      </Button>
    </div>
  );
}
