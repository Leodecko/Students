export interface ISubject{
    id : number,
    name : string
    skills: ISKill[]
}

export interface ISKill {
    id:number,
    name: string,
    score:number
}