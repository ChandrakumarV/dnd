import { formatContainerName } from "@/lib/text";
import { cn } from "@/lib/utils";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { dragItemID } from "./constant";
import { Draggable } from "./Draggable";
import { Item } from "./Item";

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

  // if already exist in container then don't show the over item
  const dragId = isPresent ? dragItemID : "";

  return (
    <section
      ref={setNodeRef}
      className={cn("py- flex flex-col overflow-hidden rounded-2xl")}
    >
      <header className="bg-primary text-background w-full p-1 py-2 pl-4 text-center font-bold">
        {formatContainerName(col_id as string)}
      </header>
      <main className="bg-muted flex h-50 w-40 items-center justify-center p-2">
        {/* item present */}
        {isPresent ? <Draggable id={dragItemID} /> : ""}
        {/* item present while over (only show when not exist) */}
        {active?.id !== dragId && over?.id === col_id && (
          <Item className="opacity-60">Drag Me</Item>
        )}
      </main>
    </section>
  );
}
