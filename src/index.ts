class animal{
    private _name : string
    private _age : number
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

let dog = new Dog('小黄', 3 , "he is running")
console.log(dog.getAge());
dog.Animal_Sounds('汪汪汪汪！')
console.log(dog.getName());