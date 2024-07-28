"use client";

import React, { useEffect, useId, useState } from "react";
import { projects } from "@/constants";
import { ProjectCard } from "./project-card";
import { ProjectDetails } from "./project-details";

export function Projects() {
  const [active, setActive] = useState<
    (typeof projects)[number] | boolean | null
  >(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  return (
    <>
      <section
        className="mx-auto mt-24 max-w-[91%] space-y-4 md:mt-44 2xl:max-w-7xl"
        id="projects"
      >
        <h2 className="text-5xl font-medium">Featured projects</h2>
        <p className="text-xl text-neutral-600">
          This section showcases a combination of professional projects and
          those created to demonstrate my skills.
        </p>
      </section>
      <ProjectDetails
        active={active}
        id={id}
        setActive={() => setActive(null)}
      />
      <ul className="mx-auto mt-12 flex w-full max-w-[91%] flex-col flex-wrap items-start gap-4 lg:flex-row 2xl:max-w-7xl">
        {projects.map((card) => (
          <ProjectCard
            key={card.title}
            id={id}
            title={card.title}
            imgSrc={card.imgSrc}
            setActive={() => setActive(card)}
          />
        ))}
      </ul>
    </>
  );
}
