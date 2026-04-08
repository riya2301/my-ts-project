"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
class Director {
    constructor(builder) {
        this.builder = builder;
    }
    buildStudent(name, age, gender, email, phone, address, city, state, zip) {
        return this.builder.setName(name).setAge(age).setGender(gender).setEmail(email).setPhone(phone).setAddress(address).setCity(city).setState(state).setZip(zip).build();
    }
}
exports.Director = Director;
