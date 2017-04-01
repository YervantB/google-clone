// Creates a clone of an object.
// var users = [{ 'user': 'barney' },{ 'user': 'fred' }];
// var shallowClone = clone(users);
// shallowClone[0] === users[0] → true
function clone(value) {
    var obj = {};

	for(var x in value){
		obj[x] = value[x];
	}

	return obj;
}


// Return the size of collection. If the argument passed is an array, then return
// the length of the array. If the argument passed is an object, then return the
// number of key/value properties.
// size([1,2,3]); → 3
// size({a: 1, b: 2}); → 2
function size(collection) {
    
	if(Array.isArray(collection))
        return collection.length;
    else{
        var count = 0;
        for(var x in collection){
            count++;
        }
        return count;
    }
}


// Returns the first element of an array without modifying the original array.
// Returns undefined if array is empty
// first([1,2,3]); → 1
// first([]); → undefined
function first(array) {
    
	return array[0] ? array[0] : undefined;
    
}


// Creates a slice of array with n elements dropped from the beginning.
// n defaults to 1
// drop([1, 2, 3]); → [2, 3]
// drop([1, 2, 3], 2); → [3]
// drop([1, 2, 3], 5); → []
// drop([1, 2, 3], 0); → [1, 2, 3]
function drop(array, n) {
	n === undefined ? n=1 : 1;
    
    return array.slice(n);
}

//Creates a slice of array with n elements taken from the beginning.
//n defaults to 1
// take([1, 2, 3]); → [1]
// take([1, 2, 3], 2); → [1, 2]
// take([1, 2, 3], 5); → [1, 2, 3]
// take([1, 2, 3], 0); → []
function take(array, n) {
	n === undefined ? n=1 : 1;
    n > array.length ? n = array.length : 1;
    var newArr = [];
    
    for(var i = 0; i < n; i++){
        newArr.push(array[i]);
    }
    
    return newArr;
}


// Gets the value of key from all elements in collection.
// pluck([{user: 'Bob', age: 20},{user: 'Sam', age: 25}], 'user'); → ['Bob','Sam']
function pluck(array, key) {
	var newArr = [];
    
    array.forEach(function(currentObj){
            if(currentObj[key])
                newArr.push(currentObj[key]);
    });
    
    return newArr;
	
}


// Assigns own enumerable properties of source object(s) to the destination
// object. Subsequent sources overwrite property assignments of previous sources.
// extend({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
// should return ->  { 'user': 'fred', 'age': 40 }
// BONUS: solve with reduce
function extend(destination) {
	var obj = arguments[0];
	
    for(var i = 0; i < arguments.length; i++){
        for(var x in arguments[i]){
            obj[x] = arguments[i][x];
        }
    }
	
	return obj;
}


// Using a for loop, call the functions in the queue in order with the input
// number, where the results of each function become the next function’s input.
// Additionally, the queue should be empty after the function is called.
/* var puzzlers = [
  function(a) { return 8 * a - 10; },
  function(a) { return (a - 3) * (a - 3) * (a - 3); },
  function(a) { return a * a + 4;},
  function(a) { return a % 5;}
];
var start = 2;
applyAndEmpty(2, puzzlers); → 3
*/
function applyAndEmpty(input, queue) {
	var result = input;
    
    for(var i = 0; i < queue.length; i++){
        result = queue[i](result);
    }
	return result;
}


// Returns a function that when called, will check if it has already computed
// the result for the given argument and return that value instead if possible.
function memoize(func) {
	var obj = {};
    
    return function(x){
        if(!obj[x]){
            obj[x] = func(x);
        }
        return obj[x];
    }
}


// Invokes func after wait milliseconds. Any additional arguments are provided
// to func when it is invoked.
function delay(func, wait, x, y) { 
	setTimeout(function(){
	  func(x,y)},wait);
}