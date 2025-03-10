export const convertedDate = (timestamp) => {
  return new Date(timestamp * 1000).toLocaleDateString("da-DK", {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });
};
