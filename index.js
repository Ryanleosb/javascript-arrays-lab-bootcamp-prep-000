const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield", "Ralph"]

function destructivelyAppendKitten (array, newElement) {
  var newArray = [newElement, ... array]
  return newArray
};
