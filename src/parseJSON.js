// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json === 'true'){
    return true;
  }
  if (json === 'false'){
    return false;
  }
  if (json === 'undefined'){
    return undefined;
  }
  if (json === 'null') {
    return null;
  }

  if (json.slice(0,1) === "[") {
    json = json.slice(1,json.length-1);
    var arrayOfStrings = json.split(",");
    var newArray = [];

    for (var i = 0; i < arrayOfStrings.length; i++) {
      newArray.push(parseJSON(arrayOfStrings[i]))`;
    }

    return newArray;

  }

  if (json.slice(0,1) === "{") {

  }

  return parseFloat(json);


};
