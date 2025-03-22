import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";

function App() {
  const [parent, setParent] = useState<UniqueIdentifier | null>("Drop 1");
  const drops = ["Drop 1", "Drop 2", "Drop 3"];

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
  return (
    <div className="h-screen max-h-screen flex items-center justify-center bg-neutral-700">
      <DndContext
        sensors={sensors}
        onDragEnd={({ over }) => {
          if (over) setParent(over.id);
        }}
      >
        <div className="flex flex-col md:flex-row sm:flex-col gap-4 w-fit">
          {drops.map((d) => (
            <Droppable id={d} key={d} dragId={d === parent ? "drag-1" : ""} />
          ))}
        </div>

        {!parent && <Draggable id="drag-1" />}

        {createPortal(
          <DragOverlay
            dropAnimation={{
              duration: 500,
              easing: "cubic-bezier(0.18, 0.67, 0.6, 1.22)",
            }}
          >
            <Draggable id="drag-1" />
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}

export default App;
