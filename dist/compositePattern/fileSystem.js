"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Directory = exports.File = void 0;
class File {
    constructor(name) {
        this.name = name;
    }
    ls() {
        console.log(this.name);
    }
}
exports.File = File;
class Directory {
    constructor(name, children) {
        this.children = [];
        this.name = name;
        this.children = children;
    }
    ls() {
        this.children.forEach(child => child.ls());
    }
    add(child) {
        this.children.push(child);
    }
}
exports.Directory = Directory;
