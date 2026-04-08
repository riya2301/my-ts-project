export interface IFileSystem {
   ls(): void;
}
export class File implements IFileSystem {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    ls(): void {
        console.log(this.name);
    }
}
export class Directory implements IFileSystem {
    private children: IFileSystem[] = [];
    private name: string;
    constructor(name: string, children: IFileSystem[]) {
        this.name = name;
        this.children = children;
    }
    ls(): void {
        this.children.forEach(child => child.ls());
    }
    add(child: IFileSystem): void {
        this.children.push(child);
    }
   
}