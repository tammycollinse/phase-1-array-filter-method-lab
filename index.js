// Code your solution here
//findMatching- This function takes an array of drivers' names and a string as arguments
// and returns the matching list of drivers. The function should be case insensitive.


//demo using the array.filter

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);




// function fuzzyMatch(item , letter){
//  return item.charAt(0) === letter; // return item.startsWith(letter);
// }

// let matching = drivers.filter(function (name){
//    if (item === name){
//    console.log(item)
//     return item;
//    }

// function findMatching(driver, name){
//    return driver === name;
// }

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// let findMatching = function(driver, name){
//    if(driver === name){
//       return driver.filter(drivers);````
//    }
// }

function findMatching(driver, matchTest){
   if (driver === matchTest){
      return driver
   }
  
   //    return driver.filter(drivers);
   // }
}

let arr = drivers.filter(findMatching(drivers, "Bobby"));


// function findMatching drivers.filter(function(driver, name = "Bobby"){
//       if(driver === name){
//          return true;
//       }
// })

