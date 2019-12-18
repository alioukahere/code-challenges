export const leapYear = year => {
  if (year % 4 === 0) {
    if ((year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0))
      return true
  }
  
  return false;
};
