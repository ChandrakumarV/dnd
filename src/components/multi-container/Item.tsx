import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

type ItemProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Item = forwardRef<HTMLButtonElement, ItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "h-24 w-24 cursor-grab rounded-2xl bg-white text-sm",
          className,
        )}
      >
        {children}
      </button>
    );
  },
);
