export interface Game{
    id?:number; // ? no requerido
    title?:string;
    description?: string;
    image?:string;
    created_at?:Date;
}