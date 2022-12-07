function toNumber(string) {
    return Number(string) || 0
}

function combineToString(a, b) {
    return a.toString() + b.toString()
}


function isTruthy(a) {
    if(a){
        return 'a is truthy!'
    }
}


function looseEquals(a, b) {
    return a == b? true: false;
}

function toJSON(obj) {
    return JSON.stringify(obj)
}

const personJSON = `
    {
       "name" : "Mike",
       "isReal" : true,
       "age" : 33 
    } 
`;

function eitherNotBoth(num) {
if((num % 3 === 0) && (num % 5 === 0)){
    return false
}else if ((num % 3 === 0) || (num % 5 === 0)){
    return true
}else{
    return false
}
}

function fizzBuzz(numbers) {
let result = ''
for(let i = 0; i < numbers.length;i++){
    if((numbers[i] % 5 === 0) && (numbers[i] % 3 === 0)){
        result += 'fizzbuzz'
    } else if(numbers[i] % 5 === 0){
        result +='buzz'
    } else if(numbers[i] % 3 === 0){
        result += 'fizz'
    }
}
return result
}

function thisName() {
    return this.name
}


const obj = {
    name: 'Bob',
    getName: function(){
        return this.name
    }
}


const fetchAge = require('./fetchAge');

function Celebrity(name) {
    this.name = name;
    const that = this;

    fetchAge(this.name, function (age) {
        that.age = age;
    });
}

// Our Shape "Constructor"
function Shape(x, y) {
    let position = {x:x,y:y}
    this.position = position;
}


function Shape(x, y) {
    let position = {x:x,y:y}
    this.position = position;
    this.move = function(x,y){
        this.position.x += x
        this.position.y += y
    }
}

const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x,y,radius);
    this.radius = radius
}

const Shape = require('./Shape');

function Circle(x, y, radius) {
    Shape.call(this, x,y,radius);
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype)


const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x,y,height,width);
    this.height = height;
    this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype)


const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x,y,height,width);
    this.height = height;
    this.width = width;
    this.flip = function(){
        let dimensions = [height,width]
        this.height = dimensions[1]
        this.width = dimensions[0]
}    
}

Rectangle.prototype = Object.create(Shape.prototype)

