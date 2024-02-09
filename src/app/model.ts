export interface Recipe {
    title: string,
    desc: string,
    imageUrl: string
    ingredients:{ingredient:string,quantity:number}[]
}