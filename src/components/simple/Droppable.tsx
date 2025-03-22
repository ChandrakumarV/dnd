import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

export const Droppable = ({ children }: { children: ReactNode }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: "droppable-1",
  });
  return (
    <div
      ref={setNodeRef}
      className={cn(
        "bg-muted border-foreground/30 flex h-64 w-64 items-center justify-center rounded-2xl border-2 border-dashed",
        {
          "dark:bg-muted/50 bg-white/50": isOver,
        },
      )}
    >
      {children ? children : <>Drop Here</>}
    </div>
  );
};
