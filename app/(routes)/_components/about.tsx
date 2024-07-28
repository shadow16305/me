import Image from "next/image";

export const About = () => {
  return (
    <section className="mx-auto mt-44 flex max-w-[91%] items-center justify-between 2xl:max-w-7xl">
      <div className="clip relative h-80 w-5/12 overflow-hidden">
        <Image
          src="/images/profile.webp"
          alt="portrait"
          fill
          className="object-cover grayscale transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="w-1/2 space-y-4 text-neutral-600">
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
