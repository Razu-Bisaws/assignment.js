var friends = ["raju", "nirmol", "rony", "rajubiswas", "sukumar biswas"];
function megaFriend() {
  var maxFriend = friends[0];
  for (var i = 1; i < friends.length; i++) {
    var element = friends[i];
  }
  if (element.length > maxFriend.length) {
    maxFriend = element;
  }
  return maxFriend;
}
var biggestFr = megaFriend(friends);
console.log(biggestFr);
