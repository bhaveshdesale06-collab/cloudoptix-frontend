import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card – base container
 */
const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      // layout & shape
      "rounded-xl border shadow-sm",

      // colors (light + dark)
      "bg-white text-gray-900 border-gray-200",
      "dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700",

      // animation polish
      "transition-all duration-300",
      "hover:-translate-y-1 hover:shadow-xl",

      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

/**
 * CardHeader
 */
const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex items-center justify-between",
      "p-4 border-b border-gray-200 dark:border-gray-700",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

/**
 * CardTitle
 */
const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-sm font-semibold tracking-tight",
      "text-gray-900 dark:text-gray-100",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

/**
 * CardContent
 */
const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "p-4",
      "text-gray-700 dark:text-gray-300",
      className
    )}
    {...props}
  />
));
CardContent.displayName = "CardContent";

export { Card, CardHeader, CardTitle, CardContent };
