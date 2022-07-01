//Create 2 objects: animal and cat, add move property to animal object, cat object must inherit move property from object animal. 


var animal = {
    move: function(){
        console.log("I'm moving");
    }
}


var cat = Object.create(animal);
cat.move();






/*


class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(this.name + ' move');
    }

}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    move() {
        console.log( this.name + ' move');
    }
}
let animal = new Animal('animal');
let cat = new Cat('cat');
animal.move();
cat.move();


*/



















