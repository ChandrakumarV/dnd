import { DndContext } from "@dnd-kit/core";
import { Draggable } from "./components/Draggable";
import { Droppable } from "./components/Droppable";

function App() {
  return (
    <DndContext>
      <Draggable />
      <Droppable />
    </DndContext>
  );
}

export default App;
