export const heightInMeters = (value) => {
  return (value / 10).toFixed(2);
};

export const weightInKilograms = (value) => {
  return (value / 10).toFixed(2);
};

export const genderRate = (value) => {
  if (value === -1) {
    return "genderless";
  }
  const female = (value / 8) * 100;
  const male = 100 - female;

  return [`Male: ` + male + `%, `, `Female: ` + female + `%`];
};
