// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
  // your code goes here
  // var obj = {
//     "a":1,
//     "b":[1,"2"],
//     "c":"1234",
//     "c":{'d': 1, 'e': {2}}
//   };
//   var finalResult = {}
// var complement = { '"': '"', '[':']'}
// var json = '{"a":1,"b":[1,2], "c":{"d": 1, "e": {2}}';

var parseJSON = function(str) {
  // if(string not empty){
  //   main logic
  // }
  console.log('ARGUMENT: ' + str);
  if (str[0]===' ') {
    str = str.substring(1);
    console.log('MODIFIED ARGUMENT: ' + str);
  }
  if(str.includes('\\')) {
    return undefined;
  } 
  
  //Object Logic
  if (str[0] === '{') {
    if (str[1] === '}') {
      return {};
    }
    var result = {};
    var keyStr = str.slice(1);
    var key = parseJSON(keyStr);
    var valStr = keyStr.slice(keyStr.indexOf(':')+1);
    var val = parseJSON(valStr);
    result[key] = val;

    var valStringified = JSON.stringify(val);
    var newSubStr = valStr.substring(valStringified.length);
    
    console.log('OBJ: New Sub String'+newSubStr);

    while (newSubStr[0]===',') {
      console.log('OBJ: Beginning of while loop substring: '+newSubStr);
      var nextStr = newSubStr.slice(1); console.log('OBJ: nextStr: '+nextStr);
      var key = parseJSON(nextStr); console.log('OBJ: key: '+key)
      var nextValStr = nextStr.slice(nextStr.indexOf(':')+1); console.log('OBJ: nextValStr: ' +nextValStr);
      var val = parseJSON(nextValStr); 
      result[key] = val; 

      console.log('OBJ: val: '+val);
      
      valStringified = JSON.stringify(val);
      
      console.log('OBJ: valStringified: '+ valStringified);
      
      newSubStr = nextValStr.substring(valStringified.length);
      console.log('OBJ: update new substring: '+newSubStr);

    }
    if (newSubStr.includes('}')) {
      return result;
    }else {
      return undefined;
    }
  }
  //string logic
  else if (str[0] === '"') {
    // go until complement
    if (str[1] === '"') {
      return '';
    }
    var subStr = str.slice(1);
    return subStr.substring(0, subStr.indexOf('"'));

    //Number Logic
  } else if (!isNaN(str[0])) {
    console.log('NUMBER: index of comma: '+str.indexOf(','));
    result = '';
    var i =0;
    do {
      result += str[i];
      i++;
    } while (!isNaN(result));

    result = result.substring(0, result.length-1);
    console.log('NUMBER: loop result:' + Number(result));
    
    return Number(result);

    //Array Logic
  } else if (str[0] === '[') {
    // console.log('ARRAY: array logic')
    if (str[1] === ']') {
      return [];
    }
    var result = [];
    var valStr = str;
    do {
      valStr = valStr.slice(1);
      console.log('ARRAY: start of do while loop: '+valStr);
      var val = parseJSON(valStr);
      console.log('ARRAY: val: ' + val)
      result.push(val);
      console.log(result)
      var valStringified = JSON.stringify(val);
      console.log('ARRAY: val stringified: ' + valStringified)
      var valStr = valStr.substring(valStringified.length);
      console.log('ARRAY: end of do while loop: ' +valStr)
    } while (valStr[0] === ',');
    if (valStr.includes(']')) {
      return result;
    }else {
      return undefined;
    }
  } 

};

  

