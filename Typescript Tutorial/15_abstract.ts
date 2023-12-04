//abstract

abstract class Animals {
    abstract move():void;
    eat(): void {
        console.log("Eat via month");
    }
}

class Cat extends Animals{
    move(): void {
        console.log("Using Legs");
    }

}

class Bird extends Animals{
    move(): void {
        console.log("Using feathers");
    }

}

let animal:Animals=new Cat();
animal.eat();

let animal2:Animals=new Bird();
animal2.move();
