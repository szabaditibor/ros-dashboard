const toIterable = (enumList) => {
  const iterableEnums = Object.entries(enumList).map(([_, currentEnum]) => currentEnum);

  return iterableEnums;
};

export default toIterable;
