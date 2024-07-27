import { BackgroundLines } from "@/components/ui/background-lines";

export const Hero = () => {
  return (
    <div className="mx-auto max-w-[91%] 2xl:max-w-7xl">
      <div className="relative w-full space-y-6 pt-40 md:max-w-3xl lg:pt-80">
        <h1 className="text-4xl font-medium text-neutral-950 lg:w-11/12 lg:text-7xl">
          Nice to meet you! I'm Chris.
        </h1>
        <p className="text-xl text-neutral-600">
          A front-end developer with a solid understanding of back-end
          technologies, specializing in creating dynamic, responsive websites.
          My expertise lies in crafting seamless user interfaces and robust web
          applications using modern technologies.
        </p>
      </div>
      <BackgroundLines />
    </div>
  );
};
