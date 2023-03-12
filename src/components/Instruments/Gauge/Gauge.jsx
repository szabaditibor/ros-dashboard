import Speedometer, { Background, Arc, Needle, Progress, Marks, Indicator, DangerPath } from "react-speedometer";

const Gauge = ({
  value,
  valueSuffix,
  min = 0,
  max,
  step,
  angle = undefined,
  backgroundAngle = undefined,
  hasDangerPath = true,
  size,
  fontSize,
  fontColor = "#FFFFFF",
}) => {
  return (
    <Speedometer width={size} angle={angle} value={value} min={min} max={max}>
      <Background angle={backgroundAngle} />
      <Arc />
      <Needle />
      {hasDangerPath && <DangerPath />}
      <Progress />
      <Marks step={step} fontSize={fontSize * 0.7} />
      <Indicator>
        {(value, textProps) => (
          <text
            {...textProps}
            fontSize={fontSize}
            fill={fontColor}
            textAnchor="middle"
            alignmentBaseline="middle"
            x={size / 2}
            y={size / 2 + size / 4}
          >
            {value} {valueSuffix}
          </text>
        )}
      </Indicator>
    </Speedometer>
  );
};

export default Gauge;
