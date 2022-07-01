// 3)
//Given an array of the names of your friends, add the words hello to each element of the array.
//For example, if the array is ["John", "Jane", "Mary"]
//the output should be:
//["Hello John", "Hello Jane", "Hello Mary"]
var friends = ["John", "Jane", "Mary"]; //create an array of friends
for (var i = 0; i < friends.length; i++) { //iterate over the array
    friends[i] = "Hello " + friends[i]; //add the word hello to each element of the array
}
console.log(friends); //print the array