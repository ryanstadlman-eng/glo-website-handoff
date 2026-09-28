import {
  compactComparisonRowIds,
  comparisonRows,
  comparisonVendors,
  type ComparisonStatus,
} from "@/lib/comparison";

type ComparisonTableProps = {
  compact?: boolean;
};

function statusClass(status: ComparisonStatus) {
  if (status === "Included") return "is-included";
  if (status === "Available by package") return "is-package";
  if (status === "Not publicly documented") return "is-not-documented";
  return "is-not-offered";
}

export default function ComparisonTable({
  compact = false,
}: ComparisonTableProps) {
  const rows = compact
    ? comparisonRows.filter(row => compactComparisonRowIds.includes(row.id))
    : comparisonRows;

  return (
    <div
      className={`comparison-table-scroll${compact ? " comparison-table-scroll-compact" : ""}`}
      role="region"
      aria-label={
        compact
          ? "Condensed staffing software comparison"
          : "Staffing software feature comparison"
      }
      tabIndex={0}
    >
      <table className="comparison-table">
        <caption className="sr-only">
          {compact
            ? "Condensed comparison of Glo, Bullhorn, Avionté, Spott, Aqore, and JobDiva"
            : "Feature comparison of Glo, Bullhorn, Avionté, Spott, Aqore, and JobDiva"}
        </caption>
        <thead>
          <tr>
            <th scope="col" className="comparison-feature-heading">
              Feature
            </th>
            {comparisonVendors.map(vendor => (
              <th
                scope="col"
                key={vendor.id}
                className={
                  vendor.id === "glo" ? "comparison-glo-cell" : undefined
                }
                title={vendor.name}
              >
                {vendor.shortName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.id}>
              <th scope="row" className="comparison-feature-cell">
                <strong>{row.feature}</strong>
                <span>{row.details}</span>
              </th>
              {comparisonVendors.map(vendor => {
                const status = row.statuses[vendor.id];
                return (
                  <td
                    key={vendor.id}
                    className={`${vendor.id === "glo" ? "comparison-glo-cell " : ""}${statusClass(status)}`}
                  >
                    <span>{status}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
