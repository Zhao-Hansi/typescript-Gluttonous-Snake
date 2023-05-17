"use strict";
class animal {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getName() {
        return this._name;
    }
    setName(name) {
        this._name = name;
    }
    getAge() {
        return this._age;
    }
    setAge(age) {
        this._age = age;
    }
    Animal_Sounds(bark) {
        console.log(bark);
    }
}
class Dog extends animal {
    constructor(name, age, run) {
        super(name, age);
        this.run = run;
    }
}
let dog = new Dog('小白', 3, "he is running");
console.log(dog.getAge());
dog.Animal_Sounds('汪汪汪汪！');
console.log(dog.getName());
