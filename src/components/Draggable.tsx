import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export function Draggable({ id }: { id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  if (isDragging)
    return (
      <button className="w-24 h-24 bg-white opacity-20 rounded-2xl text-sm">
        Drag Me
      </button>
    );

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="w-24 h-24 bg-white rounded-2xl text-sm cursor-grab"
    >
      Drag Me
    </button>
  );
}
