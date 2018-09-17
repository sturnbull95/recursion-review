// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  //pseudocode
  // *
  // variable, if 
/* Get the DOM
var nodelist =[]
var document = document.body;
  
/* Simple Base Case
wrapper function(node) {

node.childNodes.forEach(node) {
check one node to see if it contains className
if it contains, add to nodelist 
if it doesn't, do nothing
call itself wrapper(node);

}
}
wrapper(document);

return nodelist;
*/

var nodelist =[]
var document2 = document.body;
function recurse(item) {
  if(item.classList.contains(className)){
    nodelist.push(item)
  }
  if(item.children.length){
    for(var i = 0; i < item.children.length; i++){
      var child = item.children[i];
      recurse(child);
    }
  }
}
recurse(document2)
return nodelist;
};
