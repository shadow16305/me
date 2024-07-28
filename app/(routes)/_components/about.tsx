import Image from "next/image";

export const About = () => {
  return (
    <section
      className="mx-auto mt-24 flex max-w-[91%] scroll-mt-44 flex-col items-center justify-between pb-12 md:mt-44 md:flex-row md:pb-24 2xl:max-w-7xl"
      id="about"
    >
      <div className="clip relative h-80 w-full overflow-hidden md:w-5/12">
        <Image
          src="/images/profile.webp"
          alt="portrait"
          fill
          className="object-cover grayscale transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="mt-4 w-full space-y-4 text-neutral-600 md:w-1/2">
        <p>
          Currently, I specialize in building robust web applications and user
          interfaces using React and Next.js. Whether it's creating responsive
          layouts, optimizing performance, or implementing state-of-the-art
          features, I am committed to delivering top-notch solutions that exceed
          expectations.
        </p>
        <div className="h-px w-full bg-neutral-600/10" />
        <p>
          Beyond technical expertise, I value collaboration and communication,
          believing that great software is built not only with code but also
          with empathy, teamwork, and user-centric design principles.
        </p>
        <div className="h-px w-full bg-neutral-600/10" />
        <p>
          When I'm not coding, you'll find me strumming my guitar, hitting the
          gym, or gaming.
        </p>
      </div>
    </section>
  );
};
