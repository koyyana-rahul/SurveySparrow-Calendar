import dayjs from 'dayjs';

export const getMonthDays = (month, year) => {
  const start = dayjs().year(year).month(month).startOf('month');
  const end = start.endOf('month');
  const days = [];

  const prefix = start.day(); // fill empty cells
  for (let i = 0; i < prefix; i++) {
    days.push(null);
  }

  for (let i = 0; i < end.date(); i++) {
    days.push(start.add(i, 'day'));
  }

  return days;
};
