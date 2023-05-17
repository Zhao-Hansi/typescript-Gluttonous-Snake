class animal{
    private _name : string
    private _age : number
    constructor(name, age) {
        name = this._name
        age = this._age
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
    constructor(name, age, run) {
        super(name = "name", age = "age");
        run = this.run
    }
}

let dog = new Dog('小白', 3 , "he is running")
dog.getAge()
dog.Animal_Sounds('汪汪汪汪！')
dog.getName()