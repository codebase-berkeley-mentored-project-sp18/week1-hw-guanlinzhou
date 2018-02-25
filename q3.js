/*
Question 3 - JavaScript Objects
================================
JavaScript is not an object-oriented language. Despite that, it does have "objects"
that are more similar to dictionaries in Python and should be thought of as such.

The following function takes in a non-null object that may contain other objects.
It should return the maximum depth to which objects are nested.

Example:
>>> getObjectNestingDepth({})
--> 1
>>> getObjectNestingDepth({ "key1": 1, "key2": 2 })
--> 1
>>> getObjectNestingDepth({
      "lvl1": {
        "lvl2": {
          "lvl3": "END"
        }
      }
    })
--> 3
*/
function getObjectNestingDepth(inputObject) {
  //================
  var depth = 1;
  var item;
  for(item in inputObject) {
    if (item == null) {
      return depth;
    }
    if (typeof inputObject[item] == 'object') {
      var depthOfThis = getObjectNestingDepth(inputObject[item]) + 1;
      depth = Math.max(depthOfThis, depth);
      }
    }
  return depth;
  //================
}
