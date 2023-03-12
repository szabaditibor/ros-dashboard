import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from "recharts";

const GraphDisplayMode = ({ data, max, width, height }) => {
  const lastTimestamp = data.slice(-1)[0].timestamp;

  const formatLabel = (timestamp) => {
    const formattedTimestamp = formatTimestamp(timestamp);

    const label = `Last updated at ${formattedTimestamp}`;
    return label;
  };

  const formatTimestamp = (timestamp) => {
    const dateFormat = new Intl.DateTimeFormat("hu-HU", {
      timeStyle: "medium",
      timeZone: "CET",
    });

    const formattedTimestamp = dateFormat.format(new Date(timestamp));

    return formattedTimestamp;
  };

  return (
    <LineChart width={width} height={height} data={data}>
      <Line dataKey="value" type="monotone" stroke="#8884d8" dot={false} />
      <CartesianGrid stroke="#ccc" strokeDasharray="2 2" />
      <YAxis domain={[0, max]} />
      <XAxis tick={false}>
        <Label value={formatLabel(lastTimestamp)} offset={0} position="insideBottom" />
      </XAxis>
    </LineChart>
  );
};

export default GraphDisplayMode;
