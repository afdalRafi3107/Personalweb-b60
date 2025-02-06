class Animal{
    speak(){
        console.log("pelase define either animal to speak")
    }
}

class Duck extends Animal {
    speak(){
        console.log('Quack')
    }
}

class Cat extends Animal{
    speak(){
        console.log("Meaw")
    }
}

const Tom = new Cat ()
Tom.speak();

const donald = new Duck();
donald.speak()

const hewan = new Animal();
hewan.speak()