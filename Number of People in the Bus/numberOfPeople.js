var number = function (busStops) {
  let passengers = 0;
  busStops.length &&
    busStops.map((stop) => (passengers = passengers + stop[0] - stop[1]));
  return passengers;
};
