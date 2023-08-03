export class Departament {
    id?: string;
    name?: string;
    type?: string;
    hospitalName?: string;
    number: number;
    constructor(number: number) {
        this.number = number;
    }
}