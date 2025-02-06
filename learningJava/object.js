class dog{
    //construture
    constructor(
        name = "No dog name",
        color = "",
        eyeColor = "",
        height =0,
        length = 0,
        weight = 0
    ){
        this.name = name;
        this.color = color;
        this.eyeColor = eyeColor;
        this.height = height;

    }

    //propertiea
    

    //method

    sit()
    {
        console.log(` ${this.name} Dog is Sitting`)
    }

    layDown(){
        console.log('Dog Is Laydown')
    }
}


let bobby = new dog("Bobby","white", "brown", 30);
console.log(bobby.name)
console.log(bobby.color)
console.log(bobby.eyeColor)
console.log(bobby.height)

bobby.sit()