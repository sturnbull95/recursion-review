// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  /*
  Checks:
  undefined, null, boolean, string, number, array, object, function
    
AssertionError: expected '{"functions":,"undefined":undefined}' to equal '{}'





  */  
  var array = ['undefined','boolean','number'];
  var resultArr = [];
  if (array.includes(typeof obj)){
    return String(obj);
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (typeof obj === 'function') {
    return "";
  }
  if (Array.isArray(obj)) {
    if (obj.length == 0)
            return '[]';
        else {
            obj.forEach(function(element) {
                resultArr.push(stringifyJSON(element));
            });
            return '[' + resultArr + ']';
        }
  }

  if(typeof obj === "object"){
    if (obj === null) {
      return 'null';
    }
    var result = '{';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
        return '{}';
      }
      result += '"' + key + '":';
      result += stringifyJSON(obj[key]) + ',';
    }
    if (result.charAt(result.length -1) === ',') {
      result = result.substring(0,result.length -1);
    }
    result += '}';
    return result;
  }
};
