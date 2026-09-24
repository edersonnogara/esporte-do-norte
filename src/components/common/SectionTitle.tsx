import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: SectionTitleProps) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 border-b border-slate-200 pb-4 md:flex-row md:items-end">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-2 max-w-2xl text-slate-500">
            {subtitle}
          </p>
        )}
      </div>

      {action && (
        <div>
          {action}
        </div>
      )}
    </div>
  );
}