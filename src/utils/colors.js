const blendColors = (colorFrom, colorTo, ratio) => {
  const rgbFrom = toRgb(colorFrom);
  const rgbTo = toRgb(colorTo);

  const blend = ["red", "green", "blue"]
    .map((component) => calculateComponentBlend(rgbFrom[component], rgbTo[component], ratio))
    .join("");

  return blend;
};

const calculateComponentBlend = (componentFrom, componentTo, ratio) => {
  const componentBlend = Math.ceil(componentTo * ratio + componentFrom * (1 - ratio));
  const componentBlendHex = toHex(componentBlend);

  return componentBlendHex;
};

const toHex = (component) => {
  const componentHex = component.toString(16).padStart(2, "0");

  return componentHex;
};

const toRgb = (color) => {
  const red = parseInt(color.substring(0, 2), 16);
  const green = parseInt(color.substring(2, 4), 16);
  const blue = parseInt(color.substring(4, 6), 16);

  return { red, green, blue };
};

export default blendColors;
