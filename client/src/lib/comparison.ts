export type ComparisonStatus =
  | "Included"
  | "Not offered"
  | "Available by package"
  | "Not publicly documented";

export type ComparisonVendor = {
  id: "glo" | "bullhorn" | "avionte" | "spott" | "aqore" | "jobdiva";
  name: string;
  shortName: string;
};

export type ComparisonRow = {
  id: string;
  feature: string;
  details: string;
  statuses: Record<ComparisonVendor["id"], ComparisonStatus>;
};

export const comparisonVendors: ComparisonVendor[] = [
  { id: "glo", name: "Glo", shortName: "Glo" },
  { id: "bullhorn", name: "Bullhorn", shortName: "Bullhorn" },
  { id: "avionte", name: "Avionté", shortName: "Avionté" },
  { id: "spott", name: "Spott", shortName: "Spott" },
  { id: "aqore", name: "Zenople by Aqore", shortName: "Aqore" },
  { id: "jobdiva", name: "JobDiva", shortName: "JobDiva" },
];

export const comparisonRows: ComparisonRow[] = [
  {
    id: "platform-workflow",
    feature: "Platform & Workflow",
    details:
      "Multi-tenancy, calendar and sync, activity history, and bulk edits",
    statuses: {
      glo: "Included",
      bullhorn: "Included",
      avionte: "Included",
      spott: "Included",
      aqore: "Included",
      jobdiva: "Included",
    },
  },
  {
    id: "candidate-search",
    feature: "Candidate & Search",
    details:
      "Candidate ranking and scoring, resume parsing, candidate and client pools, search, and chat",
    statuses: {
      glo: "Included",
      bullhorn: "Included",
      avionte: "Included",
      spott: "Included",
      aqore: "Included",
      jobdiva: "Included",
    },
  },
  {
    id: "crm-payroll",
    feature: "CRM & Payroll",
    details: "Core CRM and payroll processing",
    statuses: {
      glo: "Included",
      bullhorn: "Available by package",
      avionte: "Included",
      spott: "Not offered",
      aqore: "Included",
      jobdiva: "Included",
    },
  },
  {
    id: "candidate-experience",
    feature: "Candidate Experience",
    details:
      "Candidate match, readiness and profile completion indicators, portal, personalized onboarding, and customized AI messaging",
    statuses: {
      glo: "Included",
      bullhorn: "Not offered",
      avionte: "Not offered",
      spott: "Not offered",
      aqore: "Not offered",
      jobdiva: "Not offered",
    },
  },
  {
    id: "job-orders-execution",
    feature: "Job Orders & Execution",
    details:
      "Task prioritization, job-order parsing during creation, and execution or autocomplete workflows",
    statuses: {
      glo: "Included",
      bullhorn: "Not offered",
      avionte: "Included",
      spott: "Included",
      aqore: "Included",
      jobdiva: "Not publicly documented",
    },
  },
  {
    id: "client-crm",
    feature: "Client & CRM",
    details:
      "Client portal, advanced CRM, financial impact monitoring, client health, cross-brand opportunity, contract or compliance risk, ratings, and approvals",
    statuses: {
      glo: "Included",
      bullhorn: "Not offered",
      avionte: "Not offered",
      spott: "Not offered",
      aqore: "Not offered",
      jobdiva: "Not offered",
    },
  },
  {
    id: "intelligence-insights",
    feature: "Intelligence Insights",
    details:
      "Operational intelligence across candidate, job, client, contract, compliance, and revenue signals, with an intuitive assistant and live market context",
    statuses: {
      glo: "Included",
      bullhorn: "Available by package",
      avionte: "Not offered",
      spott: "Not offered",
      aqore: "Not offered",
      jobdiva: "Not offered",
    },
  },
  {
    id: "workspace",
    feature: "Workspace",
    details:
      "Role-specific dashboard views and workspace theme or color controls",
    statuses: {
      glo: "Included",
      bullhorn: "Not offered",
      avionte: "Not offered",
      spott: "Not offered",
      aqore: "Included",
      jobdiva: "Not offered",
    },
  },
];

export const compactComparisonRowIds = [
  "candidate-experience",
  "job-orders-execution",
  "client-crm",
  "intelligence-insights",
];

export const comparisonSources = [
  {
    vendor: "Bullhorn",
    href: "https://www.bullhorn.com/pricing/",
    label: "Bullhorn product packaging",
  },
  {
    vendor: "Avionté",
    href: "https://www.avionte.com/staffing-software-platform/",
    label: "Avionté staffing software platform",
  },
  {
    vendor: "Spott",
    href: "https://spott.io/",
    label: "Spott AI-native ATS and CRM",
  },
  {
    vendor: "Aqore",
    href: "https://www.aqore.com/products/zenople-by-aqore/",
    label: "Zenople by Aqore",
  },
  {
    vendor: "JobDiva",
    href: "https://www.jobdiva.com/ats-software-for-staffing-agencies",
    label: "JobDiva staffing ATS platform",
  },
];
