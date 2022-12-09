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
