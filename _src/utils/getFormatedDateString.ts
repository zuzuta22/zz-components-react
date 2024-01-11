export const getFormatedDateString = (date: Date, format?: string): string => {
  const year = date.getFullYear();

  let month = (date.getMonth() + 1).toString();
  let day = (date.getDate()).toString();

  if (format == "yyyymmdd") {
    month = month.padStart(2, '0');
    day = day.toString().padStart(2, '0');

  }
  return `${year}.${month}.${day}`
}