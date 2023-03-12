import { useState, useEffect } from "react";

import { CELLS } from "../constants";

const useGrid = (topics) => {
  const [isFull, setIsFull] = useState(false);

  useEffect(() => {
    if (!topics) return;

    const totalRemainingCells = sumRemainingCells(topics);
    setIsFull(totalRemainingCells == 0);
  }, [topics]);

  return { isFull };
};

const sumRemainingCells = (topics) => {
  const totalRemainingCells = topics
    .filter((topic) => topic.subscribed)
    .reduce((acc, topic) => {
      const cellsUsed = topic.size.rowSpan * topic.size.colSpan;
      acc -= cellsUsed;

      return acc;
    }, CELLS);

  return totalRemainingCells;
};

export default useGrid;
