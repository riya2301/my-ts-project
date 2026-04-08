"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.gender = builder.gender;
        this.email = builder.email;
        this.phone = builder.phone;
        this.address = builder.address;
        this.city = builder.city;
        this.state = builder.state;
        this.zip = builder.zip;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getGender() {
        return this.gender;
    }
    getEmail() {
        return this.email;
    }
    getPhone() {
        return this.phone;
    }
    getAddress() {
        return this.address;
    }
    getCity() {
        return this.city;
    }
    getState() {
        return this.state;
    }
    getZip() {
        return this.zip;
    }
}
exports.Student = Student;
