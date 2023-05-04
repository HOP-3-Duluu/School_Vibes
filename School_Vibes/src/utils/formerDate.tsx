export const formatDate = (date: Date): string => {
  const options: any = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
};
