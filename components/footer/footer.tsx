import { Contact } from "./contact";
import { Experience } from "./experience";

export const Footer = () => {
  return (
    <footer
      className="mx-auto flex max-w-[91%] flex-col-reverse justify-between rounded-3xl py-12 md:flex-row 2xl:max-w-7xl"
      id="footer"
    >
      <Contact />
      <Experience />
    </footer>
  );
};
