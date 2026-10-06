import type { ReactNode } from "react";
import { cn } from "../lib/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("w-full px-5 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
