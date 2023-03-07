import { ISubject } from "./ISubject";

export interface Student {
    id? : number,
    name : string,
    subjects: ISubject[]
    }