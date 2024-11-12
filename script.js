// Modify this array by adding 99 as the last value in the array
const numbers = [10,20,30]
numbers.push(99)
console.log(numbers)

// create a function getLastValue(array) that takes an array and returns the last number of values.
 
function getLastValue(myArray){
  const lastIndex = myArray.length-1
  return myArray[lastIndex]
}
console.log(getLastValue([1,2,3,4,99]))
console.log(getLastValue(["hey", "hello", "thank you"]))

// create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped.

function arraySwap(myArray){
  let lastIndex = myArray.length - 1
  const lastValue = myArray[lastIndex];
  const firstValue = myArray[0]
  
  myArray[0] = lastValue
  myArray[lastIndex] = firstValue
  return myArray
}

console.log(arraySwap([1,2,3,4,99]))
console.log(arraySwap(["hey", "hello", "thank you"]))

// create a loop that counts up from 0 to 10 but counts up by 2

for(let i = 0; i <= 10; i+=2){
  console.log(i)
}

// create a loop that takes an array of numbers and creates a new array where each number is increased by 1

const newArray = []
const arrayNumbers = [1,2,3,4]

for(let i = 0; i < arrayNumbers.length; i++){
  let arrayNumber = arrayNumbers[i]
  newArray.push(arrayNumber + 1)
}
console.log(newArray)


// create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by one 



function addOne(array){
    const addedArray = []
    for(let i = 0; i < array.length; i++){
        let arrayItem = array[i]
        addedArray.push(arrayItem + 1)
    }
    return addedArray
}

console.log(addOne([1,2,3,4]))
console.log(addOne([-2,-1,0,99]))


// Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by the "num".

function addNum (array, num) {
    
    const newArray = []

    for(let i = 0; i < array.length; i++){
        let arrayItem = array[i]
        newArray.push(arrayItem + num)
    }
    return newArray
}

console.log(addNum([-2,-1,0,99], 2))
console.log(addNum([1,2,3], 3))


// Create a function addArrays(array1, array2)  that takes 2 arrays of numbers and adds each number in the arrays together.

function addArrays(array1, array2){
    const addedArrays = []
    
    for(let i = 0; i < array1.length, i < array2.length; i ++){
        let arrayItem1 = array1[i];
        let arrayItem2 = array2[i]
        
        addedArrays.push(arrayItem1 + arrayItem2)
        
    }
    return addedArrays
}

console.log(addArrays([1,1,2], [1,1,3]))
console.log(addArrays([1,2,3], [4,5,6]))

//  Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than zero.

function countPositive(nums){
    let total = 0;
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];
    
        if(num >= 0){
            total = total + 1
        }
    }
    return total
}

console.log(countPositive([-2,-3,1,5,8]))

// Create a function minMax(nums) that takes array of numbers and returns an object with the minimum and maximum numbers in the array(do this using loop instead of using something like Math.min)

function minMax(nums){
    /* We'll set the starting values of min and max as the first value in the array. */

    const objectminMax = {
        min : nums[0],
        max : nums[0]
    }
    for(let i = 0; i < nums.length; i++){
        let num = nums[i];


        // If the value is less than the min, update the min.
       
        if(num < objectminMax.min){
            objectminMax.min = num
        }

        // If the value is greater than the max, update the max.

        if(num > objectminMax.max){
            objectminMax.max = num
        }
    }
    
    return objectminMax
}

console.log(minMax([-2, 1,7, 15]))


// Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.

function countWords(words) {
    const result = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];

      // result[word] adds/accesses a property using whatever is
      // saved inside the 'word' variable.
      // If word = 'apple', result[word] will do result['apple']
      // If word = 'grape', result[word] will do result['grape']
      if (!result[word]) {
        result[word] = 1;
      } else {
        result[word]++;
      }
    }

    return result;
  }

  console.log(countWords(['apple', 'grape', 'apple', 'apple']));