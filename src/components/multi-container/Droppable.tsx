import { cn } from "@/lib/utils";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { Draggable } from "./Draggable";
import { Item } from "./Item";
import { formatContainerName } from "@/lib/text";
import { dragItemID } from "./constant";

export function Droppable({
  col_id,
  isPresent,
}: {
  col_id: UniqueIdentifier;
  isPresent: boolean;
}) {
  const { active, over, setNodeRef } = useDroppable({
    id: col_id,
    data: {},
  });

  // if already exist in container the don't show the over item
  const dragId = isPresent ? dragItemID : "";

  return (
    <section
      ref={setNodeRef}
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl bg-neutral-700/50",
      )}
    >
      <header className="w-full bg-amber-400 p-1 py-2 pl-4 text-center font-bold text-white">
        {formatContainerName(col_id as string)}
      </header>
      <main className="flex h-40 w-40 items-center justify-center p-2">
        {/* item present */}
        {isPresent ? <Draggable id={dragItemID} /> : ""}
        {/* item present while over (only show when not exist) */}
        {active?.id !== dragId && over?.id === col_id && (
          <Item className="opacity-10">Drag Me</Item>
        )}
      </main>
    </section>
  );
}
