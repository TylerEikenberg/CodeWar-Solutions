const number = busStops => {
  // store number of people on bus
  let onBus = 0;
  busStops.forEach(arr => {
    onBus += arr[0] - arr[1];
  });
  return onBus;
};

number([
  [10, 0],
  [3, 5],
  [5, 8]
]);
