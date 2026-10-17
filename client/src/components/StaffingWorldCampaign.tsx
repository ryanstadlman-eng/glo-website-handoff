/**
 * Shared Glo event campaign. Existing card geometry is retained across conventions.
 */
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CONFERENCE_DATE_LABEL, CONFERENCE_LOCATION, CONFERENCE_LOGO, CONFERENCE_PATH } from "@/lib/conference";

const EVENT_TITLE = "Executive Forum North America";

export default function StaffingWorldCampaign() {
  return (
    <section className="staffing-world-section executive-forum-section" aria-labelledby="staffing-world-heading">
      <div className="container">
        <div className="staffing-world-campaign">
          <div className="staffing-world-logo-wrap">
            <div className="conference-logo-plate">
              <img src={CONFERENCE_LOGO} width={127} height={74} alt="SIA Staffing Industry Analysts" />
            </div>
            <p className="conference-event-details">
              <strong>{EVENT_TITLE}</strong>{" | "}
              <span className="conference-event-date">{CONFERENCE_DATE_LABEL}</span>
              <span className="conference-event-location">{CONFERENCE_LOCATION}</span>
            </p>
          </div>
          <div className="staffing-world-copy">
            <h2 id="staffing-world-heading">
              <span className="staffing-world-title-line staffing-world-title-line-primary">Attending {EVENT_TITLE}?</span>{" "}
              <span className="staffing-world-title-line staffing-world-title-line-accent">We are too.</span>
            </h2>
            <p>Make time for a focused look at how Glo turns live staffing signals into the next best action.</p>
          </div>
          <div className="staffing-world-action">
            <Button asChild size="lg" className="glo-button">
              <Link href={CONFERENCE_PATH}>Schedule a Glo Up <span className="action-glyph">↗</span></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
