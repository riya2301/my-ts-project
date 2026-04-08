import { StudentBuilder } from "./studentBuilder";

export class Student {
    private name: string;
    private age: number;
    private gender: string;
    private email: string;
    private phone: string;
    private address: string;
    private city: string;
    private state: string;
    private zip: string;
    constructor(builder: StudentBuilder) {
        this.name = builder.name    ;
        this.age = builder.age;
        this.gender = builder.gender;
        this.email = builder.email;
        this.phone = builder.phone;
        this.address = builder.address;
        this.city = builder.city;
        this.state = builder.state;
        this.zip = builder.zip;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
    getGender(): string {
        return this.gender;
    }
    getEmail(): string {
        return this.email;
    }
    getPhone(): string {
        return this.phone;
    }
    getAddress(): string {
        return this.address;
    }
    getCity(): string {
        return this.city;
    }
    getState(): string {
        return this.state;
    }
    getZip(): string {
        return this.zip;
    }
}   