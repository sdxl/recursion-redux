// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){

  var results = [];
  var node = node || document.body;

    if (node.classList) {
      for (var i = 0; i < node.classList.length; i++) {
        if (node.classList[i] === className) {
          results.push(node);
        }
      }
    }

    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        results = results.concat(getElementsByClassName(className, node.children[i]));
      }
    }

  return results;

};
