import { Contact } from "./contact";
import { Experience } from "./experience";

export const Footer = () => {
  return (
    <footer className="mx-auto mt-44 flex max-w-[91%] items-center justify-between rounded-3xl bg-neutral-950 p-12 2xl:max-w-7xl">
      <Experience />
      <Contact />
    </footer>
  );
};
