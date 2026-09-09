type Evidence = "Verified implementation" | "Documented product design" | "Evidence pending" | "Conceptual framework";

export function EvidenceBadge({ label }: { label: Evidence }) {
  const tone = label === "Verified implementation" ? "verified" : label === "Evidence pending" ? "pending" : "documented";
  return <span className={"evidence-badge " + tone}>{label}</span>;
}
