import { skills } from "@/constants";

export const Skills = () => {
  return (
    <section
      className="relative z-10 mt-24 scroll-mt-44 rounded-[40px] bg-neutral-950 py-24 text-white md:mt-44"
      id="skills"
    >
      <div className="mx-auto max-w-[91%] 2xl:max-w-7xl">
        <div className="flex items-center gap-x-4">
          <h2 className="text-xl font-semibold tracking-wider">
            Skills & technologies
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </div>
        <ul className="mt-8 grid grid-cols-2 flex-wrap justify-between gap-y-10 md:flex">
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex items-center gap-x-1 lg:w-[14%] xl:gap-x-2"
            >
              <span>{skill.icon}</span>
              <p className="text-xl md:text-base xl:text-xl">{skill.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
