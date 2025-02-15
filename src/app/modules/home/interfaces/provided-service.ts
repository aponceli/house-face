import { Section } from "./section";

export interface ProvidedService {
    id:number,
    title:string,
    imageUrl:string,
    description:string,
    sections:Section[]
}
