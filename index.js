const returnFirstTwoDrivers= function (collection) {
  return newCollection = collection.slice(0, 2);
}

const returnLastTwoDrivers = function(collection) {
  return collection.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (valueMultiplyBy) {
  return function (value) {
    return valueMultiplyBy * value;
  };
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
const selectDifferentDrivers = function (collection, whichOnes) {
  return whichOnes(collection);
}
