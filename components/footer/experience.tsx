import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Experience = () => {
  return (
    <Accordion
      type="single"
      defaultValue="item-1"
      className="w-5/12 rounded-3xl text-white"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="space-x-2">
            <span>Scads</span>
            <span className="text-sm text-neutral-400">Jan 2023 - Present</span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-neutral-400">
          <ul className="space-y-2">
            <li>
              Enhanced platform efficiency and user convenience, resulting in a
              23% increase in user transactions, by collaborating with backend
              developers and blockchain engineers to integrate complex
              functionalities, including token swapping.
            </li>
            <li>
              Increased user satisfaction and engagement by 37% through the
              redesign and development of a sleek, intuitive front end.
            </li>
            <li>
              Improved application performance by 18% through the implementation
              of advanced caching strategies, code-splitting, and optimization
              of rendering processes, resulting in faster load times and a
              smoother user experience.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2 border-none" className="border-none">
        <AccordionTrigger>
          <div className="space-x-2">
            <span>Uma-lab</span>
            <span className="text-sm text-neutral-400">
              Jul 2023 - Apr 2024
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent className="text-neutral-400">
          <ul className="space-y-2">
            <li>
              Boosted website performance and user engagement by 53% through
              leading the development of a responsive and user-friendly website,
              ensuring alignment with Uma-lab's brand identity.
            </li>
            <li>
              Enhanced user retention by 61% by collaborating with a designer to
              integrate aesthetic elements with robust functional components,
              resulting in a seamless and highly functional website.
            </li>
            <li>
              Boosted site reliability by 30% and user satisfaction by 35% by
              implementing crucial performance enhancements and regular
              maintenance updates to optimize website functionality.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
