import { Student } from "./student";

export class StudentBuilder {
    name: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    constructor() {
        this.name = '';
        this.age = 0;
        this.gender = '';
        this.email = '';
        this.phone = '';
        this.address = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
    setName(name: string): StudentBuilder {
        this.name = name;
        return this;
    }
    setAge(age: number): StudentBuilder {
        this.age = age;
        return this;
    }
    setGender(gender: string): StudentBuilder {
        this.gender = gender;
        return this;
    }
    setEmail(email: string): StudentBuilder {
        this.email = email;
        return this;
    }
    setPhone(phone: string): StudentBuilder {
        this.phone = phone;
        return this;
    }
    setAddress(address: string): StudentBuilder {
        this.address = address;
        return this;
    }
    setCity(city: string): StudentBuilder {
        this.city = city;
        return this;
    }
    setState(state: string): StudentBuilder {
        this.state = state;
        return this;
    }
    setZip(zip: string): StudentBuilder {
        this.zip = zip;
        return this;
    }
    build(): Student {
        return new Student(this);
    }
}   