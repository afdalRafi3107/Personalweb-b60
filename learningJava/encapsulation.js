class BankAccount{
    #balance = 100;

    deposit(amount){
        this.#balance = this.#balance + amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const BCA = new BankAccount();
console.log(BCA.getBalances());