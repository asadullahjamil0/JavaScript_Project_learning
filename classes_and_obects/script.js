class Animal {
    constructor(name) {
        this.name = name;
        console.log("Obect Created");
    }

    eats() {
        console.log(this.name + " is eating...");
    }

    jumps() {
        console.log(this.name + " is jumping...");
    }
};

class Lion extends Animal {
    constructor(name) {
        super(name);
        console.log("Obect Created and he is a lion...");
    }

    eats() {
        console.log(this.name + " is eating... Lion");
    }
};

let a = new Animal("Rabbit");
console.log(a);
a.eats();
a.jumps();

let l = new Lion("Lion");
l.eats();