import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

export const Draggable = () => {
  const { setNodeRef, listeners, attributes, transform } = useDraggable({
    id: "drag-1",
  });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="bg-background flex h-30 w-30 cursor-grab items-center justify-center rounded-2xl"
    >
      Drag Me
    </div>
  );
};
