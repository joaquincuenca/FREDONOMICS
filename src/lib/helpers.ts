export const getBorderClasses = (index: number) => {
  const isEven = index % 2 === 0;
  const isFirst = index === 0;

  return `
      ${!isFirst ? "border-t md:border-t xl:border-t-0" : ""}
      ${isEven ? "border-r md:border-r-0 xl:border-r" : ""}
    `;
};
