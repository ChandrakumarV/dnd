import { cn } from "@/lib/utils";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Item } from "./Item";

export function Droppable({
  id,
  dragId,
}: {
  id: UniqueIdentifier;
  dragId: UniqueIdentifier;
}) {
  const { isOver, active, over, setNodeRef } = useDroppable({
    id,
    data: {},
  });

  return (
    <section
      ref={setNodeRef}
      className={cn(
        "mb-4 flex h-44 w-39 flex-col overflow-hidden rounded-2xl bg-neutral-600",
        {
          "bg-neutral-500/50": isOver,
        },
      )}
    >
      <header className="w-full bg-amber-400 p-1 py-2 pl-4 text-center font-bold text-white">
        {id}
      </header>
      <main className="flex h-full items-center justify-center p-2">
        {dragId ? <Draggable id={dragId} /> : ""}
        {active?.id !== dragId && over?.id === id && (
          <Item className="opacity-40">Drag Me</Item>
        )}
      </main>
    </section>
  );
}
