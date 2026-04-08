"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentBuilder = void 0;
const student_1 = require("./student");
class StudentBuilder {
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
    setName(name) {
        this.name = name;
        return this;
    }
    setAge(age) {
        this.age = age;
        return this;
    }
    setGender(gender) {
        this.gender = gender;
        return this;
    }
    setEmail(email) {
        this.email = email;
        return this;
    }
    setPhone(phone) {
        this.phone = phone;
        return this;
    }
    setAddress(address) {
        this.address = address;
        return this;
    }
    setCity(city) {
        this.city = city;
        return this;
    }
    setState(state) {
        this.state = state;
        return this;
    }
    setZip(zip) {
        this.zip = zip;
        return this;
    }
    build() {
        return new student_1.Student(this);
    }
}
exports.StudentBuilder = StudentBuilder;
