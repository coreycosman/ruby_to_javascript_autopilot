var apples = 14
console.log(apples)
// _______________

console.log( 'I have ' + apples + ' apples.')


// _______________

var materials =
[ "wood", "metal", "stone" ]
console.log(materials)


var words = {
  "elephant": "The world's largest land mammal.",
  "school": 'A place of learning.',
  "ice cream": 'A delicious milk-based dessert.'
}

console.log(words)

// _______________

var num = 36
if (num > 10) {
    console.log( num + " is greater than 10. ");
}
else if ( num === 0) {
  console.log( num + " is exactly 10");
}
else {
  console.log( num + " must be less than 10");
}
// _______________
var times = 10
for(var i = 0; i < times; i++){
  console.log(" Doing the same thing over and over. ")
}
// _______________
var base = 5
var times = 20
for(var i = 0; i < times; i++){
  console.log( i + base )
}
// _______________
var total = 0
var times = 100
for(var i = 0; i < times; i++){
  console.log( total += i)
}
// _______________
var foo = []
for(var i = 3; i <= 15; i++){
  foo.push(i)
}

for(var num = 0; num < foo.length; num++){
  var item = foo[num]
  if (item > 9){
    console.log( " you can get on the rollercoaster ")
  }
  else {
    console.log( " You are too short to ride this rollercoaster. ")
  }
}
// _______________
var containers = [ 'purse', 'wallet', 'backpack']

for(var num = 0; num < containers.length; num++){
  var item = containers[num]
  console.log(item)
}
// _______________
function hello_world() {
  return "hello world"
}

var result = hello_world();
console.log(result);

function add(first_num, second_num) {
  return first_num + second_num
}
var result = add(1, 2)
console.log(result)
// _______________
var amount = add(5 , 7)
console.log(amount)


// _______________
// _______________
// _______________
// _______________
// _______________
// _______________
// _______________
