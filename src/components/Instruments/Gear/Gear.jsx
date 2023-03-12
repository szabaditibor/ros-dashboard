import Gauge from "../Gauge";

const Gear = ({ value, min = 1, max, step, size, fontSize }) => {
  return (
    <Gauge
      value={value}
      min={min}
      max={max}
      step={step}
      angle={160}
      backgroundAngle={180}
      hasDangerPath={false}
      size={size}
      fontSize={fontSize}
      fontColor="#00000"
    />
  );
};

export default Gear;
