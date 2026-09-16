import type { EvidenceLabel } from "@/data/portfolio";

export function EvidenceBadge({ label }: { label: EvidenceLabel }) {
  const tone = label === "Verified implementation"
    ? "verified"
    : label === "User-confirmed product"
      ? "pending"
      : "documented";

  return <span className={`evidence-badge ${tone}`}>{label}</span>;
}
