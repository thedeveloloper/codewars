class BestLift {
  constructor(queues, capacity) {
    this.capacity = capacity;
    this.passengers = [];
    this.queues = queues;
    this.direction = 1;
    this.currentFloor = this.lastFloor = 0;
    this.log = [0];
  }

  get isAtCapacity() {
    return this.passengers.length >= this.capacity;
  }
  get isDone() {
    return (
      !this.passengers.length && !this.queues.some((queue) => queue.length)
    );
  }

  get lastLogEntry() {
    return this.log[this.log.length - 1];
  }

  getNextPassengerDestination() {
    const passengers = [...this.passengers].sort();
    return this.direction === 1 ? passengers[0] : passengers.reverse()[0];
  }

  changeDirection() {
    this.direction = this.direction * -1;
  }

  isDefined = (variable) => variable !== undefined;

  isUndefined = (variable) => !this.isDefined(variable);

  isAboveCurrentFloor = (floor) => floor > this.currentFloor;

  isBelowCurrentFloor = (floor) => !this.isAboveCurrentFloor(floor);

  hasHigherFloorWithPassengersGoingUp = (queue, floor) =>
    this.isAboveCurrentFloor(floor) &&
    queue.some((passengerWithDestination) => passengerWithDestination > floor);

  getNextQueueDestinationGoingUp = () =>
    this.queues
      .map((queue, floor) => {
        if (this.hasHigherFloorWithPassengersGoingUp(queue, floor))
          return floor;
      })
      .filter((floor) => floor !== undefined)
      .sort()[0];

  isValidFloorBeforePassengerDestination = (floor, nextPassengerDestination) =>
    this.direction === 1
      ? floor > this.currentFloor && floor < nextPassengerDestination
      : floor < this.currentFloor && floor > nextPassengerDestination;

  getNextFloorBeforePassengerDestination = (nextPassengerDestination) =>
    this.queues
      .map((queue, floor) => {
        if (
          queue.length &&
          this.isValidFloorBeforePassengerDestination(
            floor,
            nextPassengerDestination
          )
        )
          return floor;
      })
      .filter((floor) => floor !== undefined)
      .sort()[0];

  hasLowerFloorWithPassengersGoingDown = (queue, floor) =>
    floor < this.currentFloor &&
    queue.some((passengerWithDestination) => passengerWithDestination < floor);

  getNextQueueDestinationGoingDown = () =>
    this.queues
      .map((queue, floor) => {
        if (this.hasLowerFloorWithPassengersGoingDown(queue, floor))
          return floor;
      })
      .filter((floor) => floor != undefined)
      .sort()
      .reverse()[0];

  checkNextFloorAgain = () => {
    this.currentFloor = this.direction === 1 ? this.queues.length - 1 : 0;
    this.changeDirection();
    this.visitFloor(this.currentFloor);
    return this.getNextFloor();
  };

  getNextFloor() {
    let nextPassengerDestination = this.getNextPassengerDestination();

    if (this.isUndefined(nextPassengerDestination)) {
      return this.direction === 1
        ? this.getNextQueueDestinationGoingUp() ?? this.checkNextFloorAgain()
        : this.getNextQueueDestinationGoingDown() ?? this.checkNextFloorAgain();
    }
    return (
      this.getNextFloorBeforePassengerDestination(nextPassengerDestination) ??
      nextPassengerDestination
    );
  }

  isValidPassenger(passenger) {
    if (this.isUndefined(passenger)) return false;
    return this.direction === 1
      ? passenger > this.currentFloor
      : passenger < this.currentFloor;
  }

  hasPassengersForCurrentFloor = () =>
    this.passengers.filter((p) => p === this.currentFloor).length > 0;

  removePassengersForCurrentFloor = () => {
    this.passengers = this.passengers.filter((p) => p !== this.currentFloor);
  };

  addCurrentFloorToLog = () =>
    this.lastLogEntry !== this.currentFloor && this.log.push(this.currentFloor);

  dropOffPassengers() {
    if (this.hasPassengersForCurrentFloor()) {
      this.removePassengersForCurrentFloor();
      this.addCurrentFloorToLog();
    }
  }

  getNextPassengerFromCurrentQueue = () =>
    this.queues[this.currentFloor].splice(0, 1);

  arePassengersInQueueOnCurrentFloor = () =>
    this.queues[this.currentFloor].length > 0;

  addInvalidPassengersBackToQueue = (invalidPassengers) => {
    this.queues[this.currentFloor] = [
      ...invalidPassengers,
      ...this.queues[this.currentFloor],
    ];
  };

  addPassengerToLift = (passenger) => this.passengers.push(passenger);

  pickupPassengers() {
    let invalidPassengers = [];
    let madePickup = false;
    //pick up
    while (!this.isAtCapacity) {
      if (!this.arePassengersInQueueOnCurrentFloor()) break;

      let [passenger] = this.getNextPassengerFromCurrentQueue();

      this.isValidPassenger(passenger)
        ? (this.addPassengerToLift(passenger), (madePickup = true))
        : invalidPassengers.push(passenger);
    }

    this.addInvalidPassengersBackToQueue(invalidPassengers);
    madePickup && this.addCurrentFloorToLog();
  }

  visitFloor(floorNumber) {
    this.lastFloor = this.currentFloor;
    this.currentFloor = floorNumber;

    this.dropOffPassengers();

    this.pickupPassengers();
  }
}

var theLift = function (queues, capacity) {
  console.log(
    "Parameters:\n",
    "queues => ",
    queues,
    "\n",
    "capacity => ",
    capacity
  );
  const lift = new BestLift(queues, capacity);

  // start at ground floor.
  lift.visitFloor(0);
  while (!lift.isDone) {
    lift.lastLogEntry !== lift.currentFloor && lift.log.push(lift.currentFloor);
    lift.visitFloor(lift.getNextFloor());
  }
  lift.lastLogEntry !== 0 && lift.log.push(0);
  return lift.log;
};

var queues = [
  [8],
  [],
  [13, 17, 12],
  [17, 13, 6, 0],
  [14, 14, 11, 15],
  [],
  [4, 9],
  [],
  [],
  [2, 8],
  [3, 14],
  [12],
  [2, 0],
  [1],
  [6, 12],
  [10],
  [6, 12, 10],
  [12, 7],
];
// [ 0, 1, 2, 3, 1, 2, 3, 2, 3, 0 ]
let lift = new BestLift(queues, 2);
/*
[ 0,
  2,
  3,
  4,
  6,
  8,
  10,
  11,
  13,
  14,
  17,
  16,
  15,
  14,
  13,
  12,
  10,
  9,
  7,
  6,
  4,
  3,
  2,
  0,
  2,
  3,
  4,
  6,
  11,
  12,
  17,
  16,
  15,
  14,
  13,
  12,
  10,
  9,
  6,
  0,
  3,
  4,
  6,
  11,
  13,
  17,
  16,
  15,
  14,
  13,
  10,
  9,
  3,
  2,
  3,
  4,
  6,
  9,
  11,
  12,
  14,
  13,
  12,
  9,
  8,
  6,
  4,
  11,
  14,
  13,
  1,
  4,
  15,
  0 ]
*/
