// Create a function that accepts an array and returns min and max number in an array

const minMaxFunction = function (arr) {
  // Initialize the array
  let max = arr[0];
  let min = arr[0];

  // Loop through the array
  for (let i = 0; i < arr.length; i++) {
    const curElement = arr[i];
    // console.log(curElement);
    // Condition for Max value
    if (curElement > max) {
      max = curElement;
    }

    // Condition for min value
    if (curElement < min) {
      min = curElement;
    }
  }
  console.log(max, min);
};

const numbers = [1, 3, 2, 5, 7, 19, 45, 0];

const result = minMaxFunction(numbers);
console.log(result);

// Part 2: Modify the function to accept two arrays
const minMaxFunctionNew = function (arr1, arr2) {
  // Merge the two arrays
  let arr3 = arr1.concat(arr2);

  // Initialize the array
  let max = arr3[0];
  let min = arr3[0];

  // Loop through the array
  for (let i = 0; i < arr3.length; i++) {
    const curElement = arr3[i];
    // console.log(curElement);
    // Condition for Max value
    if (curElement > max) {
      max = curElement;
    }

    // Condition for min value
    if (curElement < min) {
      min = curElement;
    }
  }
  console.log(max, min);
};

const eleOne = [1, 3, 2, 5, 7, 19, 45];
const eleTwo = [3, 6, 67, 34, 22, 14];

const resultTwo = minMaxFunctionNew(eleOne, eleTwo);
console.log(resultTwo);

// Debuggin with the console and Breakpoint

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // C. Fix the Bug
    // value: Number(prompt('Degree Celcius')),
    value: 10,
  };

  // B. Find the Bug
  console.log(measurement);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// A. Identify the Bug
console.log(measureKelvin());

//////////////////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... in 3 days ..."


Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.


Use the problems-solving framework: Unserstand the problems and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]

*/
console.log('################');

const forcastedMaxTemp = [17, 21, 23];
// const tempArr = forcastedMaxTemp[0];
let str2 = '';
for (let i = 0; i < forcastedMaxTemp.length; i++) {
  const element = forcastedMaxTemp[i];
  //   console.log(element);
  str2 = str2 + `${forcastedMaxTemp[i]}C in ${i + 1} days ...`;
}
console.log(`...${str2}`);

function printForecast(arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    str = str + `${arr[i]}C in ${i + 1} days ...`;
    // console.log(`... ${element}C in ${days} days...`);
  }
  console.log('...' + str);
}

console.log('####################');
const forecastResult = printForecast([12, 5, -5, 0, 4]);
console.log(forecastResult);


// Implementing Game Logic
