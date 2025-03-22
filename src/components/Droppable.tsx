import { cn } from "@/lib/utils";
import { useDroppable } from "@dnd-kit/core";

export function Droppable() {
  const { isOver, setNodeRef } = useDroppable({
    id: "droppable",
  });

  return (
    <div
      ref={setNodeRef}
      className={cn("w-32 h-32 bg-neutral-200", { "bg-amber-100": isOver })}
    >
      drop
    </div>
  );
}
