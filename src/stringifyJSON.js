// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (obj === null){
    return 'null';
  }

  if (typeof obj === 'string'){
    return '"' + obj +'"';
  }

  if (Array.isArray(obj)){
      var results = [];

     for(var i=0; i<obj.length; i++){
       results.push(stringifyJSON(obj[i]));
     }

     return "[" + results.join(',') + "]";
  }

  if (typeof obj === 'object'){
    var results =[];

    for(var key in obj){
      if(typeof obj[key] === 'function' || obj[key] === undefined){
        continue;
      }

      else{
      results.push(stringifyJSON(key)+ ":" + stringifyJSON(obj[key]));
      }

    }

    return "{" + results.join(',') + "}";
  }

  else{
    return ''+obj;
  }
};
