import { CloseIcon } from "@/components/ui/close-icon";
import { projects } from "@/constants";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const ProjectDetails = ({
  active,
  id,
  setActive,
}: {
  active: (typeof projects)[number] | boolean | null;
  id: string;
  setActive: () => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useOutsideClick(ref, setActive);

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-10 h-full w-full bg-black/20"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 z-[100] grid place-items-center">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-white lg:hidden"
              onClick={setActive}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="flex h-full w-full max-w-[500px] flex-col overflow-hidden bg-white dark:bg-neutral-900 sm:rounded-3xl md:h-fit md:max-h-[95%]"
            >
              <motion.div
                layoutId={`image-${active.title}-${id}`}
                className="relative h-80 w-full lg:h-80"
              >
                <Image
                  quality={100}
                  priority
                  fill
                  src={active.imgSrc}
                  alt={active.title}
                  className="object-cover object-top sm:rounded-tl-lg sm:rounded-tr-lg"
                />
              </motion.div>
              <div>
                <div className="flex items-start justify-between p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="text-lg font-medium text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                  </div>
                  <div className="flex gap-x-2">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.site_link}
                      target="_blank"
                      className="rounded-full bg-neutral-950 px-3 py-1 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                    >
                      Site
                    </motion.a>
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.github_link}
                      target="_blank"
                      className="rounded-full bg-neutral-950 px-3 py-1 text-base font-medium text-white transition-colors hover:bg-neutral-800"
                    >
                      Github
                    </motion.a>
                  </div>
                </div>
                <div className="relative h-[420px] overflow-y-auto overflow-x-hidden px-4 pt-0 md:h-fit md:overflow-hidden">
                  <motion.p
                    layout
                    className="text-base text-neutral-600 dark:text-neutral-400"
                  >
                    {active.description.p1}
                  </motion.p>
                  {active.description.p2 && (
                    <motion.p
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-2 h-40 overflow-auto text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] dark:text-neutral-400 md:h-fit"
                    >
                      {active.description.p2}
                    </motion.p>
                  )}
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 h-40 overflow-auto pb-4 text-neutral-600 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] dark:text-neutral-400 md:h-fit"
                  >
                    <span className="font-medium text-neutral-950">
                      Tech stack:
                    </span>{" "}
                    {active.stack}
                  </motion.div>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed bottom-0 left-0 h-20 w-full bg-gradient-to-b from-transparent to-white md:hidden"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};
