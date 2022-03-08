//Want to support my work 🤝? https://buymeacoffee.com/vandad

class Person {
    _age: number;
    constructor(age: number = 18) {
        this._age = age;
    }
    get age(): number {
        return this._age;
    }
    set age(age: number | string) {
        let value = Number(age);
        if (Number.isFinite(value)) {
            this._age = value;
        } else {
            this._age = 18;
        }
    }
}

const p = new Person();
console.log(p.age); // 18
p.age = "40";
console.log(p.age); // 40
p.age = 30;
console.log(p.age); // 30
