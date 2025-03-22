import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { Item } from "./Item";

export function Draggable({ id }: { id: UniqueIdentifier }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
    });

  const style = {
    transform: CSS.Translate.toString(transform),
  };

  if (isDragging) return <Item className="opacity-20">Drag Me</Item>;

  return (
    <Item
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className="cursor-grab"
    >
      Drag Me
    </Item>
  );
}
