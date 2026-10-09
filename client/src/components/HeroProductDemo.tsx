/**
 * Homepage software proof: dashboard, growth pipeline, and submissions.
 * Supplied captures are shown at their native proportions without cropping.
 */
import { useRef, useState } from "react";
import { Link } from "wouter";

const views = [
  {
    mode: "dashboard",
    code: "01",
    label: "Dashboard",
    caption: "See business impact, revenue at risk, and the highest-impact actions in one operating view.",
    href: "/recruiter-os/",
    image: "/images/glo-dashboard-20261009-013fe340.webp",
    width: 1790,
    height: 1020,
    alt: "Glo dashboard showing business impact, revenue at risk, placements in motion, recoverable revenue, and highest-impact actions",
  },
  {
    mode: "growth",
    code: "02",
    label: "Growth Pipeline",
    caption: "See where client demand, open opportunity, and placement value are building.",
    href: "/recruitment-crm/",
    image: "/images/glo-growth-pipeline-20261009-dfdac281.webp",
    width: 1786,
    height: 1014,
    alt: "Glo CRM Pipeline showing prospect and buyer contacts, opportunities, clients, job orders, growth priorities, and a visual sales funnel",
  },
  {
    mode: "delivery",
    code: "03",
    label: "Submissions",
    caption: "Move recruiter submissions by readiness, risk, match, and the next action.",
    href: "/recruiter-os/",
    image: "/images/glo-submissions-20261009-c01421fd.webp",
    width: 1784,
    height: 1014,
    alt: "Glo Submissions showing candidate and job records, status, priority, recruiter, match scores, and follow-up actions",
  },
] as const;

export default function HeroProductDemo() {
  const [activeMode, setActiveMode] = useState<(typeof views)[number]["mode"]>("dashboard");
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = views.find((view) => view.mode === activeMode) ?? views[0];

  return (
    <div className="hero-product-demo">
      <p className="hero-demo-instruction">Explore the dashboard, growth pipeline, and submissions.</p>
      <div className="hero-demo-nav" role="tablist" aria-label="Explore Glo product experiences">
        {views.map((view, index) => {
          const selected = active.mode === view.mode;
          return (
            <button
              key={view.mode}
              ref={(element) => { tabs.current[index] = element; }}
              id={`hero-demo-tab-${view.mode}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="hero-demo-panel"
              tabIndex={selected ? 0 : -1}
              className={selected ? "hero-demo-tab is-active" : "hero-demo-tab"}
              onClick={() => setActiveMode(view.mode)}
              onKeyDown={(event) => {
                let next: number;
                if (event.key === "ArrowRight") next = (index + 1) % views.length;
                else if (event.key === "ArrowLeft") next = (index + views.length - 1) % views.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = views.length - 1;
                else return;
                event.preventDefault();
                setActiveMode(views[next].mode);
                tabs.current[next]?.focus();
              }}
            >
              {view.code && <span className="hero-demo-code">{view.code}</span>}
              <span>{view.label}</span>
            </button>
          );
        })}
      </div>

      <div className="hero-demo-stage" id="hero-demo-panel" role="tabpanel" aria-labelledby={`hero-demo-tab-${active.mode}`} tabIndex={0}>
        <div className={`hero-demo-media hero-demo-media-${active.mode}`} style={{ aspectRatio: `${active.width} / ${active.height}` }}>
          <img src={active.image} alt={active.alt} width={active.width} height={active.height} decoding="async" />
        </div>
      </div>

      <div className="hero-demo-caption">
        <p>{active.caption}</p>
        <Link href={active.href}>Open {active.label} <span className="action-glyph">↗</span></Link>
      </div>
    </div>
  );
}
