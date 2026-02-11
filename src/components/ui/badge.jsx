import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        className
      )}
      {...props}
    />
  );
});

Badge.displayName = "Badge";

export { Badge };
