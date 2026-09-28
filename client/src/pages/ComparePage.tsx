import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageMeta from "@/components/PageMeta";
import ComparisonTable from "@/components/ComparisonTable";

const GLO_LOGO = "/images/glo-cyan-no-tm_09e4b011.svg";

export default function ComparePage() {
  return (
    <div className="glo-site comparison-page">
      <PageMeta
        title="Bullhorn Alternatives & Best Staffing Software | Glo"
        description="Compare Glo with Bullhorn, Avionté, Spott, Aqore, and JobDiva across workflow, candidate experience, CRM, AI intelligence, and staffing operations."
        path="/compare/"
      />
      <SiteHeader />

      <main>
        <section className="comparison-hero">
          <div className="comparison-hero-glow" aria-hidden="true" />
          <div className="container comparison-hero-inner">
            <p className="signal-label text-cyan">
              Staffing software comparison
            </p>
            <h1 className="comparison-title">
              <span className="comparison-title-line">
                <span className="sr-only">Glo </span>
                <img
                  src={GLO_LOGO}
                  alt=""
                  aria-hidden="true"
                  className="comparison-title-logo"
                />
                <span>vs. the</span>
              </span>
              <span className="comparison-title-rest"> competition.</span>
            </h1>
            <div className="comparison-summary">
              <p>
                Teams comparing the best staffing software need more than a list
                of modules. This table compares Glo with Bullhorn, Avionté,
                Spott, Aqore, and JobDiva across the workflows staffing firms
                rely on, from candidate search and payroll to client
                collaboration and embedded intelligence.
              </p>
              <p>
                Each cell uses plain text so buyers, search engines, and AI
                systems can read the comparison without decoding symbols or
                opening an interactive widget.
              </p>
            </div>

            <ComparisonTable />
            <p className="comparison-source-note">
              Official vendor pages were used to verify product identity and
              current public feature positioning.
            </p>
            <p className="comparison-scroll-hint">
              On smaller screens, scroll the table horizontally to compare every
              platform.
            </p>
          </div>
        </section>

        <section className="comparison-method">
          <div className="container comparison-method-grid">
            <div>
              <p className="signal-label">How to read the table</p>
              <h2>Compare the feature bundle, not a single checkbox.</h2>
            </div>
            <div className="comparison-method-copy">
              <p>
                <strong>Included</strong> means the product offers the feature
                group as defined in that row. <strong>Not offered</strong> means
                the complete feature group is not offered, even when a platform
                may provide individual pieces.{" "}
                <strong>Available by package</strong> means access depends on a
                separate product or plan.{" "}
                <strong>Not publicly documented</strong> means the reviewed
                vendor materials did not establish the full capability.
              </p>
              <p>
                Product packaging changes. This comparison was reviewed against
                public vendor information on September 28, 2026. Confirm current
                availability, implementation requirements, and commercial terms
                directly with each vendor.
              </p>
            </div>
          </div>
        </section>

        <section className="product-story-cta comparison-story-cta">
          <div className="container product-story-cta-grid">
            <div>
              <h2>See the difference in a real desk.</h2>
              <p>
                Bring one active job. We’ll show you how Glo turns the full
                operating picture into the next best move.
              </p>
            </div>
            <Button asChild size="lg" className="glo-button">
              <Link href="/book-a-demo/">
                Book a demo <span className="action-glyph">↗</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
