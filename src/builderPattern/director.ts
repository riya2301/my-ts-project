import { Student } from "./student";
import { StudentBuilder } from "./studentBuilder";

export class Director {
    private builder: StudentBuilder;
    constructor(builder: StudentBuilder) {
        this.builder = builder;
    }
    buildStudent(name: string, age: number, gender: string, email: string, phone: string, address: string, city: string, state: string, zip: string): Student {
        return this.builder.setName(name).setAge(age).setGender(gender).setEmail(email).setPhone(phone).setAddress(address).setCity(city).setState(state).setZip(zip).build();
    }
}   