import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";
import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

export default function Simple() {
  const [isDropped, setIsDropped] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 5,
    },
  });
  const sensors = useSensors(touchSensor, mouseSensor);

  const handleDragEnd = ({ over }: DragEndEvent) => {
    if (over?.id) setIsDropped(true);
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <div className="flex h-full flex-col gap-4">
        <div className="flex gap-2">
          <div className="bg-muted flex h-64 w-64 items-center justify-center rounded-2xl">
            {!isDropped && <Draggable />}
          </div>
          <Droppable>{isDropped && <Draggable />}</Droppable>
        </div>

        {isDropped && (
          <Button onClick={() => setIsDropped(false)}>Reset</Button>
        )}
      </div>
      {/* overlay */}
      {createPortal(
        <DragOverlay
          dropAnimation={{
            duration: 500,
          }}
        >
          <div className="bg-background flex h-30 w-30 cursor-grab items-center justify-center rounded-2xl">
            Drag Me
          </div>
        </DragOverlay>,
        document.body,
      )}
    </DndContext>
  );
}
