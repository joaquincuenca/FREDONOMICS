export const getBorderClasses = (index: number) => {
  const isLeftColumn = index % 2 === 0;
  const isTopRow = index < 2;

  return `
    ${!isTopRow ? "border-t" : ""} 
    ${isLeftColumn ? "border-r md:border-r-0 xl:border-r" : ""} 
    ${index === 1 ? "md:border-t xl:border-t-0" : ""}
    ${index === 2 ? "md:border-t" : ""}
    ${index === 3 ? "md:border-t" : ""}
  `;
};
