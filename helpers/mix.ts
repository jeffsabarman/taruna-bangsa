export const getShortenText = (
  text: string,
  maxCharNum: number,
  cutOffCharNum: number,
) => {
  return text.length > maxCharNum
    ? `${text.substring(0, cutOffCharNum)}...`
    : text;
};
