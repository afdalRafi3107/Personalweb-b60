class Phone {
    battery = 0;
    screen = 0;
    signal = 0;

    constructor(name = ""){
        this.name =name;
    }

    ConnectWifi(){

        console.log('this phone has battery:', this.battery)
        console.log('this phone has signal:', this.signal)

        if (this.signal > 50 && this.battery >20){
            this.succesConnect()
        }else{
            this.failetConnect()
        }
    }

    succesConnect(){
        console.log("succes connect")
    }

    failetConnect(){
        console.log("failed to connect")
    }
}

const iphone = new Phone("i phone 15")

iphone.signal = 70;
iphone.battery = 80;

iphone.ConnectWifi()
