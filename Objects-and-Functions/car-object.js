/* -  Create a car object, add a color property to it with the value equals 'black'
   -  Change the color property of the car object to 'green'
    -  Add the power property to the car object, 
 which is a function and displays the engine power to the console
*/ 


let car = {
    color: 'black',
    power: function() {
        console.log(this.engine);
    }
}


car.color = 'green';
car.engine = '100';
//car.power();
console.log(car);














 
    
