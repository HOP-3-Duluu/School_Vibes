const currentDate = new Date();
const day = currentDate.getUTCDate();
const year = currentDate.getFullYear();
const monthIndex = currentDate.getMonth();
const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const monthName = months[monthIndex];
const dayWeek = currentDate.getDay();
const dayName = daysOfWeek[dayWeek];

export {currentDate, day, year, monthName, dayWeek, dayName};
