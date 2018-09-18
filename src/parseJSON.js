var parseJSON = function(str) {
  // if(string not empty){
  //   main logic
  // }
  console.log('ARGUMENT: ' + str);
  if (str[0]===' ') {
    str = str.substring(1);
    console.log('ELMINATE WHITE MODIFIED ARGUMENT: ' + str);
  }
  if(str.includes('\\')) {
    return undefined;
  } 

  if (str.slice(0,4)==='true') { return true;}
  if (str.slice(0,5)==='false') { return false;} 
  if (str.slice(0,4)==='null') { return null;}
  
  //Object Logic
  if (str[0] === '{') {
    if (str[1] === '}') {
      return {};
    }
    var result = {};
    var keyStr = str.slice(1);
    var key = parseJSON(keyStr);
    var valStr = keyStr.slice(keyStr.indexOf(':')+1); 
    while (valStr[0]=== ' ') {
      valStr = valStr.slice(1);
    }
    console.log('OBJ: valStr: '+valStr);
    var val = parseJSON(valStr); console.log('OBJ: val: '+val);
    result[key] = val;

    //check if val is a string
    // 
    

    var valStringified = JSON.stringify(val); console.log('OBJ: valStringified: '+valStringified);
    var newSubStr = valStr.substring(valStringified.length);
    
    console.log('OBJ: New Sub String:'+newSubStr);
    console.log(newSubStr[0]);

    while (newSubStr[0]===',') {
      if (str[1]===' ') {
    str = str.substring(1);
    console.log('MODIFIED ARGUMENT: ' + str);
  }
      console.log('OBJ: Beginning of while loop substring: '+newSubStr);
      var nextStr = newSubStr.slice(1); console.log('OBJ: nextStr: '+nextStr);
      var key = parseJSON(nextStr); console.log('OBJ: key: '+key)
      var nextValStr = nextStr.slice(nextStr.indexOf(':')+1); console.log('OBJ: nextValStr: ' +nextValStr);
      var val = parseJSON(nextValStr); 
      result[key] = val; 

      console.log('OBJ: val: '+val);
      
      valStringified = JSON.stringify(val);
      
      console.log('OBJ: valStringified: '+ valStringified);
      
      newSubStr = nextValStr.substring(valStringified.length+1);
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
  } else if (!isNaN(str[0]) || !isNaN(str.substring(0,2))) {
    console.log('NUMBER: index of comma: '+str.indexOf(','));
    result = '';
    var i =0;
    do {
      result += str[i];
      i++;
    } while (!isNaN(result)|| result === '-');

    result = result.substring(0, result.length-1);
    console.log('NUMBER STRING RESULT:')
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
      while (valStr[0]=== ' ') {
      valStr = valStr.slice(1);
      }
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
