import { socials } from "@/constants";
import { SiGmail } from "react-icons/si";

export const Contact = () => {
  return (
    <div className="mt-8 flex flex-col gap-y-12 text-white md:mt-0 md:w-5/12 md:gap-y-24">
      <p className="text-xl">
        I would love to hear about your project and how I could help. Send me an
        email or a message, and I’ll get back to you as soon as possible.
      </p>
      <ul className="space-y-4">
        <li>
          <a
            href="mailto:chris16305@gmail.com"
            className="flex items-center gap-x-2"
          >
            <SiGmail />
            <span
              className="pseudo-text-effect"
              data-after="chris16305@gmail.com"
            >
              <span>chris16305@gmail.com</span>
            </span>
          </a>
        </li>
        {socials.map((item) => (
          <li key={item.text}>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-x-2"
            >
              <span>{item.iconSm}</span>
              <span data-after={item.text} className="pseudo-text-effect">
                <span>{item.text}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
