// Sort Method

function sortUp(array) {
 return array.sort(function (a,b) {
    return a - b;
})
}


function sortDown(array) {
const compareFn = (a,b) => (a > b ? -1 : 0)
array.sort(compareFn)
}


function sortStringsUp(array) {
const compareFn = (a,b) => (a.localeCompare(b))
array.sort(compareFn)
}


function sortStringsDown(array) {
const compareFn = (a,b) => (a.localeCompare(b))
array.sort(compareFn)
array.reverse()   
}


function sortStudents(students){
const sortedStudents = students.sort((a, b) => {
    //if one student has graduated and the other hasn't, prioritize the one that has graduated
    if (a.graduated !== b.graduated) {
        return a.graduated ? -1 : 1;
    }
    
    //otherwise, prioritize by highest grade
    return b.grade - a.grade;
});
}


const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
  // Sort the events array by month
  events.sort((a,b) => {
    // Find the index of each month
    let aIndex = MONTHS.indexOf(a.month);
    let bIndex = MONTHS.indexOf(b.month);
    // Compare the index of each month
    return aIndex - bIndex;
  });
  return events;
}

// Map Method

function plusOne(arr) {
    const newArr = arr.map(function(x) {
    return x + 1;
})
    return newArr
}


function squareRoot(arr) {
    const newArr = arr.map(function(x) {
    return Math.sqrt(x);
})
    return newArr   
}


function squared(n) {
    return Math.pow(n,2);
}


unction squaredMap(arr) {
    const newArr = arr.map(function(x) {
    return Math.pow(x,2);
})
    return newArr
}


function addScore(players) {
  // add 10 to the first 3 players
  players.map((player, index) => {
    if (index < 3) {
      player.score += 10
    }
    return player;
  })
  return players;
}


function addScore(players) {
  // add 10 to the first 3 players
  players.map((player, index) => {
    if (index < 3) {
      player.score += 10
    }
    return player;
  })
  return players;
}


// Filter Method

function lessThanFive(array) {
    return array.filter((function(el)
    {
    return (el < 5)
    }))
}

function onlyTrue(array) {
       return array.filter((function(el)
    {
    return (el === true)
    }))
}

function shortStrings(array) {
       return array.filter((function(el)
    {
    return (el.length <= 3)
    }))
}

function topStudents(array) {
    const highAchievers = 
    array.filter(function(student){
        return student.grade >= 90
    })
    return highAchievers
}


function firstThree(array) {
    result = array.filter(function(el,i){
        return i <= 2
    })
    return result
}


function unique(array) {
    const uniqueValues = array.filter(
  (item, index) => array.indexOf(item) === index
);
return uniqueValues
}


// Reduce Method

// numbers is an array full of numbers
// let's add all the numbers and return the sum
// i.e. [1,2,3,4,5] => 15
function sum(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    });
}


function largest(numbers) {
    return numbers.reduce((acc, c) => {
        return acc > c ? 1 : c
    }, 1);
}

function largest(numbers) {
    return numbers.reduce((acc, c) => {
        return acc > c ? 1 : c
    }, 1);
}


// numbers is an array full of numbers
// let's remove any duplicates and return it
// i.e. [2,2,3,5,1,3,4] => [2,3,5,1,4]
function removeDuplicates(numbers) {
return numbers.reduce((acc, curr) => {
    // Check if item is already in the array, using indexOf
    let index = acc.indexOf(curr);
    // If item is not in the array, add it
    if (index === -1) return [...acc, curr];
    // If item is already in the array, return the array as it is
    else return acc;
  }, []);
}


// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
  let object = foods.reduce((accumulator, currentValue) => {
        if(accumulator[currentValue.type] !== undefined){
            accumulator[currentValue.type].push(currentValue.food)
        } else {
            accumulator[currentValue.type] = [currentValue.food]
        }
        return accumulator;
    }, {});
    return object;
}


// numbers is an array full of integers
// let's figure if all the numbers are unique
// i.e. [1,2,3,1] => false
// [1,2,3] => true
function allUnique(arr) {
    return arr.reduce((a,c,i) => a && arr.indexOf(c) === i, true);
}


