const ENGLISH_LOCALE_KEY = "en-GB";

export const fromTimestampToDateString = (timestamp: number) => {
  // Might be any locale. Directly user browser local for instance. Since this is a test I won't go that far

  const tempDate = new Date(timestamp);

  if (
    tempDate.getUTCFullYear() === 1970 &&
    tempDate.getUTCMonth() === 0 &&
    tempDate.getUTCDate() === 1
  ) {
    return `${tempDate.getUTCHours()}:${tempDate.getUTCMinutes()}:${tempDate.getUTCSeconds()} `;
  }

  return new Date(timestamp).toLocaleDateString(ENGLISH_LOCALE_KEY, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
