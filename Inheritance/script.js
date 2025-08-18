class Animal {
    speak() {
        console.log("Animal speaks");
    }
}
class Dog extends Animal {
    speak() {
        super.speak();
        console.log("Dog barks");
    }
}

console.log("This is from animal");
const a1 = new Animal();
a1.speak();

console.log("This is from Dog");
const d1 = new Dog();
d1.speak();
