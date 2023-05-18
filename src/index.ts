interface animal_interface{
    _name : string
    _age : number
}

class animal implements animal_interface{
     _name : string
     _age : number
    constructor(name: string, age : number) {
        this._name = name
        this._age = age
    }
    getName(){
        return this._name
    }
    setName(name: string){
        this._name = name
    }
    getAge(){
        return this._age
    }
    setAge(age: number){
        this._age = age
    }
    Animal_Sounds(bark: string){
        console.log(bark)
    }
}

class Dog extends animal{
    run: string
    constructor(name : string, age: number, run : string) {
        super(name, age);
        this.run = run
    }
}

abstract class cat{
    face : string
    mouth : string
    beard : number
    constructor(face: string, mouth : string, beard: number) {
        this.face = face
        this.mouth = mouth
        this.beard = beard

    }
    cat_food(food_kinds : string){
        if (food_kinds === 'aikendi'){
            console.log("only " + this.face + " can eat " + food_kinds)
        }
    }
}

class toy_cat extends cat{
}
let little_cat = new toy_cat("black", "little", 6)
little_cat.cat_food("aikendi")

let dog = new Dog('小黄', 3 , "he is running")
console.log(dog.getAge());
dog.Animal_Sounds('汪汪汪汪！')
console.log(dog.getName());
dog.setAge(2000)
console.log(dog.getAge())