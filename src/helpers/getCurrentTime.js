const getCurrentTime = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const current = new Date();
  const date = `${
    months[current.getMonth()]
  } ${current.getDate()}, ${current.getFullYear()} at ${current.getHours()}:${current.getMinutes()}:${current.getSeconds()}`;
  return date;
};

export default getCurrentTime;
