import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem({
  id,
  isOverlay = false,
}: {
  id: UniqueIdentifier;
  isOverlay?: boolean;
}) {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? "none" : transition,
    opacity: isDragging ? 0.5 : 1,
    zIndex: isOverlay ? 1000 : "auto",
    backgroundColor: isDragging ? "#e0e7ff" : "#ffffff",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="flex h-12 w-40 items-center justify-center rounded-lg border bg-white shadow-sm transition-all hover:bg-gray-50"
    >
      {id}
    </div>
  );
}
