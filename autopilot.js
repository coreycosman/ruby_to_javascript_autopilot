

function get_new_car() {
  var object = {
  "city": "Toronto",
  "passenger": 0,
  "gas": 100
  }
  return object;
}

function get_other_car() {
    var object = {
    "city": "Mississauga",
    "passenger": 1,
    "gas": 50
  }
  return object;
}
function add_car(cars, new_car) {
  cars.push(new_car);
  return (" Adding new car to fleet. Fleet size is now " + cars.length);
}
function pick_up_passenger(car){
  car.passenger++ ;
  return car
}

function get_destination(car) {
  if (car.city === "Toronto") {
  return "Mississauga";
  }
  else if (car.city === "Mississauga"){
    return "London";
  }
  else if (car.city === "London") {
    return "Toronto";
  }

}


function get_gas_display(gas_amount) {
  return (gas_amount)
}

function fill_up_gas(car) {
  var old_gas = car.gas;
  car.gas = 100;
  return (" Filled up to " + get_gas_display(car.gas) + " on gas from " + get_gas_display(old_gas))
}

function drive(car, city_distance) {
  if (car.gas < city_distance) {
    return fill_up_gas(car)
  }
  car.city = get_destination(car);
  car.gas -= city_distance
  return (" Drove to " + car.city + " . " + " Remaining gas: " + get_gas_display(car.gas) + " . ");
 }

function drop_off_passengers(car) {
  var previous_passengers = car.passenger;
  car.passenger = 0;
  return (" Dropped off " + previous_passengers + " passengers. ");
}

function act(car) {
  var distance_between_cities = 50

  if (car.gas < 20) {
    return fill_up_gas(car);
  }
  else if (car.passenger < 3) {
    return pick_up_passenger(car);
  }
  else {
    if (car.gas < distance_between_cities) {
      return fill_up_gas(car);
    }
    var drove_to = drive(car, distance_between_cities);
    var passengers_dropped = drop_off_passengers(car);
    return ( drove_to + passengers_dropped )
  }
}

function command_fleet(cars) {
  for(var num = 0; num < cars.length; num++){
   var item = cars[num];
   var action = act(item)
   return (" Car " + (num + 1) + action)
  }
}

function add_one_car_per_day(cars, num_days) {
  var times = num_days
  for(var i = 0; i < times; i++){
    new_car = get_new_car()
    console.log(add_car(cars, new_car) + command_fleet(cars))
  }
}


// console:
// _________________________________________
var new_car = get_new_car();
var other_car = get_other_car();
var cars = []
console.log(add_car(cars, new_car))
console.log(add_car(cars, other_car))
console.log(pick_up_passenger(cars[0]))
console.log(get_destination(cars[0]))
console.log(get_gas_display(cars[0].gas))
console.log(fill_up_gas(cars[0]))
console.log(drive(cars[1], 49))
console.log(drop_off_passengers(cars[1]))
console.log(act(cars[1]))
console.log(add_one_car_per_day(cars, 10))
