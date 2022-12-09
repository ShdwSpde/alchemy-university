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

