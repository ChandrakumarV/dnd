import { cn } from "@/lib/utils";
import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { Draggable } from "./Draggable";

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
    <div
      ref={setNodeRef}
      className={cn(
        "w-39 h-44 mb-4 bg-neutral-600 flex flex-col rounded-2xl overflow-hidden",
        {
          "bg-neutral-500/50": isOver,
        }
      )}
    >
      <div className="w-full bg-amber-400 p-1 pl-4 text-center text-white font-bold py-2">
        {id}
      </div>
      <div className="p-2 flex items-center justify-center h-full">
        {dragId ? <Draggable id={dragId} /> : ""}
        {active?.id !== dragId && over?.id === id && (
          <button className="w-24 h-24 bg-white opacity-50 rounded-2xl text-sm">
            Drag Me
          </button>
        )}
      </div>
    </div>
  );
}
