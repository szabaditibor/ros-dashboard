import { Grid } from "@chakra-ui/react";

import InstrumentGridWrapper from "./InstrumentGridWrapper";
import EmptyView from "./EmptyView";
import InstrumentContainer from "../InstrumentContainer";

import { COLUMNS, ROWS } from "../../constants";

const InstrumentGrid = ({ topics, modifyTopic, ros, handleDragEnd }) => {
  const isEmpty = topics.filter((topic) => topic.subscribed).length == 0;

  if (isEmpty) {
    return (
      <InstrumentGridWrapper topics={topics} onDragEnd={handleDragEnd}>
        <EmptyView />
      </InstrumentGridWrapper>
    );
  }

  return (
    <InstrumentGridWrapper topics={topics} onDragEnd={handleDragEnd}>
      <Grid width="100vw" height="80vh" templateColumns={`repeat(${COLUMNS}, 1fr)`} templateRows={`repeat(${ROWS}, 1fr)`} gap={12}>
        {topics
          .filter((topic) => topic.subscribed)
          .map((topic) => (
            <InstrumentContainer topic={topic} modifyTopic={modifyTopic} ros={ros} key={topic.name} />
          ))}
      </Grid>
    </InstrumentGridWrapper>
  );
};

export default InstrumentGrid;
