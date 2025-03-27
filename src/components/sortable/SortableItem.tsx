import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  id: UniqueIdentifier;
  isOverlay?: boolean;
}

export function SortableItem({ id, isOverlay = false }: SortableItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.6 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`flex h-12 w-32 items-center justify-center rounded-md border transition-all ${
        isDragging || isOverlay
          ? "border-gray-500 bg-gray-300 dark:border-gray-600 dark:bg-gray-700"
          : "border-gray-400 bg-gray-100 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
      }`}
    >
      {id}
    </div>
  );
}
