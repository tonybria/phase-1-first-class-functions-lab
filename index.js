const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
 
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
  return (value) => {
    return value * multiplier;
  };
};
    
const fareDoubler = createFareMultiplier(2);

  const fareTripler = createFareMultiplier(3);

  const selectDifferentDrivers = (arrayOfDrivers, selectDriversFunction) => {
  return selectDriversFunction(arrayOfDrivers);
};


