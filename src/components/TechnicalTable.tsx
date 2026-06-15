import { ProductSpec } from "@/types";

interface TechnicalTableProps {
  specs: ProductSpec[];
}

export function TechnicalTable({ specs }: TechnicalTableProps) {
  const mid = Math.ceil(specs.length / 2);
  const left = specs.slice(0, mid);
  const right = specs.slice(mid);

  return (
    <div className="grid gap-x-12 gap-y-0 md:grid-cols-2">
      <dl>
        {left.map((spec, index) => (
          <div
            key={`left-${index}`}
            className="flex justify-between border-b border-border py-4"
          >
            <dt className="text-sm text-muted">{spec.label}</dt>
            <dd className="text-sm font-medium">{spec.value}</dd>
          </div>
        ))}
      </dl>
      <dl>
        {right.map((spec, index) => (
          <div
            key={`right-${index}`}
            className="flex justify-between border-b border-border py-4"
          >
            <dt className="text-sm text-muted">{spec.label}</dt>
            <dd className="text-sm font-medium">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
