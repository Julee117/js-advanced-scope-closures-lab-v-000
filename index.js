function produceDrivingRange(blockRange) {
  return function(num1, num2) {
    let numRange = blockRange - (parseInt(num2) - parseInt(num1))
    if (numRange > 0) {
      return `within range by ${numRange}`;
    } else {
      return `${Math.abs(numRange)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip) {
  return function(num) {
    return num * tip;
  }
}

function createDriver() {
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++ driverId;
    }
  }
}
