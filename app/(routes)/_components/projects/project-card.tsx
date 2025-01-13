import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  imgSrc: string;
  setActive: () => void;
  id: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  imgSrc,
  setActive,
  id,
}) => {
  return (
    <motion.div
      layoutId={`card-${title}-${id}`}
      key={title}
      onClick={setActive}
      className={cn(
        "group flex w-full cursor-pointer flex-col rounded-3xl pb-4 ring-1 ring-neutral-950/10 transition-colors hover:bg-neutral-100",
        title === "Uma-lab" || title === "UX/UI designer portfolio"
          ? "lg:w-[65%]"
          : "lg:w-[32%]",
      )}
    >
      <div className="flex w-full flex-col gap-4">
        <motion.div
          layoutId={`image-${title}-${id}`}
          className="relative h-64 w-full overflow-hidden rounded-t-3xl"
        >
          <Image
            fill
            src={imgSrc}
            alt={title}
            className="h-60 w-full rounded-t-3xl object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute left-0 top-0 size-full rounded-t-3xl bg-black opacity-0 transition-all duration-300 group-hover:opacity-40" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
            Open
          </span>
        </motion.div>
        <div className="flex flex-col items-center justify-center">
          <motion.h3
            layoutId={`title-${title}-${id}`}
            className="text-center text-base font-medium text-neutral-800 dark:text-neutral-200 md:text-left"
          >
            {title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};
