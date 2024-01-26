//https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class SmallestIntegerFinder {
    findSmallestInt(args) {
      let minimum = args[0];
      for (let i = 0; i <= args.length; i++) {
        if (args[i] < minimum) minimum = args[i];
      }
      return minimum;
    }
  }
  
  //https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
  function circleCircumference(circle) {
    return 2 * Math.PI * circle.radius;
  }
  
  //https://www.codewars.com/kata/training-js-number-12-loop-statement-for-dot-in-and-for-dot-of/train/javascript
  function giveMeFive(obj) {
    let result = [];
    for (let key in obj) {
      if (key.length === 5) result.push(key);
      if (obj[key].length === 5) result.push(obj[key]);
    }
    return result;
  }
  

  // опційна поглиблена задачка про замикання
  //https://www.codewars.com/kata/understanding-closures-the-basics/train/javascript
  function buildFun(n){
    var mass = [];
    for (var i = 0; i< n; i++){
        (function(number){
            mass.push(function(){
                return number;
            })
        })(i);
    }
    return mass;
}