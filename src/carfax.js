var database = database.carDataBase;
var carData = database.carData;

//console.log(carData);
// your code here

var testArray = [1, 2, 3, 4, 5];
//this toolbelt.loop will log eah value of test array to console
toolbelt.loop(testArray, function(element){
	console.log(element);
})

toolbelt.transform(testArray, function(element){
	return element * 5;
})

//model:  target list data is an ARRAY of prices of the cars
//inputs = an array of objects that has 6 properties each.  outputs = an array of numbers (prices) of cars

/*var inputData = [{id:100, year:2000, make:'Ford', model:'Focus', color:'blue', price:2000   }, {id:100, year:2000, make:'Ford', model:'Focus', color:'blue', price:2000   }]

var outputData = [2000, 10000, 20000, 6200]*/

//pseudocode:

var priceParser = function(cars){

// Create a new empty array called "outputData"
var outputData = [];
// Iterate thru an array of objects.  
 toolbelt.transform(cars, function(carObject){
 	toolbelt.loop(carObject,function(value, key){
 		if(key==='price'){
 			outputData.push(value);
 		}
 	})

 })
		//For each object, loop thru the properties and 
		// test if key ==== price
		// If the key is price, add value of price to the outputData we created.
//REturn our outputData array we created
return outputData;
};

console.log(priceParser(carData));

//TOOLS WE WANT TO USE: 
//1) transform for outer loop
//2) loop for the inner loop
//3) console log for testing

var yearParser = function(cars){
	var yearCollection=[];
	toolbelt.transform(cars, function(carObject){
		toolbelt.loop(carObject, function(value, key){
			if (key==='year'){
				yearCollection.push(value);
			}

		})
})
return yearCollection;
};
var testArray =[1,2,34]
database.currentYears = yearParser(carData);
database.test = testArray
console.log(database.currentYears);

//model:  output equals average age, fake output of 10 years,
 var sampleInput = [7, 6, 10, 2, 20] 
// var average age = 10 

//pseudocode: 
//go thru the ages, add them up as sum, and divide by # of elements (or length of array)

//build:

var averageYearCalculator = function (ageList){
	var sum = 0;
	toolbelt.loop (ageList, function(age){
		sum = sum + age;
		
		console.log(sum);
	
	})
	
	return (sum/ageList.length);

}

console.log(averageYearCalculator(sampleInput));











