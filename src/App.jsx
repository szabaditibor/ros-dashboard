import { useTopics, useGrid } from "./hooks";

import { loadFromJson, saveAsJson } from "./lib/persistence";

import Header from "./components/Header";
import InstrumentGrid from "./components/InstrumentGrid";

import "./App.css";

const App = () => {
  const { topics, ros, isLoading, setTopics, modifyTopic, reorderTopics } = useTopics();
  const { isFull } = useGrid(topics);

  const saveGridToFilesystem = () => {
    saveAsJson(topics);

    console.log("Successfully saved");
  };

  const loadGridFromFilesystem = async (e) => {
    const grid = await loadFromJson(e);
    setTopics(grid);

    console.log("Successfully loaded");
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      reorderTopics(active, over);
    }
  };

  return (
    <main className="App">
      <Header
        topics={topics}
        isLoading={isLoading}
        isFull={isFull}
        setTopics={setTopics}
        save={saveGridToFilesystem}
        load={loadGridFromFilesystem}
      />

      {topics && <InstrumentGrid topics={topics} modifyTopic={modifyTopic} ros={ros} handleDragEnd={handleDragEnd} />}
    </main>
  );
};

export default App;
