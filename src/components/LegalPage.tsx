import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Reveal from "./Reveal";

type Section = { h: string; p: string | string[] };

const slug = (text: string, index: number) => `s${index + 1}-${text.toLowerCase().normalize("NFD").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;

/** Long-form legal text with a sticky, scroll-aware table of contents. */
export default function LegalPage({
  eyebrow,
  title,
  updated,
  intro,
  sections,
  tocLabel,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: Section[];
  tocLabel: string;
}) {
  const ids = sections.map((section, index) => slug(section.h, index));
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [ids.join("|")]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative overflow-x-clip">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-brand-300/30 blur-[120px] dark:bg-brand-600/15" />
      <div className="container-page relative pb-24 pt-32 md:pt-40">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        <Reveal delay={0.05}><h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] sm:text-7xl">{title}</h1></Reveal>
        <Reveal delay={0.1}><p className="muted mt-4 text-sm">{updated}</p></Reveal>
        <Reveal delay={0.15}><p className="lead mt-8 max-w-3xl">{intro}</p></Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[16rem_1fr]">
          <nav aria-label={tocLabel} className="hidden lg:block">
            <div className="sticky top-32">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-forest-900/50 dark:text-cream-100/50">{tocLabel}</p>
              <ol className="mt-4 space-y-1 border-l border-forest-900/10 dark:border-white/10">
                {sections.map((section, index) => (
                  <li key={ids[index]} className="relative">
                    {active === ids[index] && (
                      <motion.span layoutId="toc-active" className="absolute -left-px top-0 h-full w-[2px] bg-brand-600" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                    )}
                    <a
                      href={`#${ids[index]}`}
                      className={`block py-1.5 pl-4 text-sm transition ${active === ids[index] ? "font-semibold text-forest-900 dark:text-cream-50" : "text-forest-900/55 hover:text-forest-900 dark:text-cream-100/55 dark:hover:text-cream-50"}`}
                    >
                      {section.h}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="max-w-3xl space-y-4">
            {sections.map((section, index) => (
              <Reveal key={ids[index]} y={18}>
                <section id={ids[index]} className="card scroll-mt-28 p-7 sm:p-9">
                  <h2 className="flex items-baseline gap-3 text-xl font-semibold tracking-tight">
                    <span className="font-display text-2xl italic text-brand-600 dark:text-brand-300">{String(index + 1).padStart(2, "0")}</span>
                    {section.h}
                  </h2>
                  {(Array.isArray(section.p) ? section.p : [section.p]).map((paragraph) => (
                    <p key={paragraph.slice(0, 40)} className="mt-3 leading-relaxed text-forest-900/75 dark:text-cream-100/75">{paragraph}</p>
                  ))}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
