class Animal{
    brain = true;
    legs = 0;
    name   = "unknown name";

    sleep(){
        console.log(`${this.name} is sleeping`)
        console.log(`${this.name} has ${this.legs} legs`)
    }
}

class Human extends Animal{
    name = "afdal"
    legh= 2;
    eyesCount = 2;
}

class pet extends Animal{
    legs =4;
    fleas = 0;
}

class Cat extends pet{
    fleas = 5;
}

class Dog extends pet{
    fleas = 10;
}

const afdal = new Human ();
afdal.sleep()
console.log(afdal.eyesCount)

const kucing =new Cat ();
console.log(kucing.fleas)
const anjing =new Dog ();
console.log(anjing.fleas)