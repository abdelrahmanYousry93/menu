export class resturant
{
    id:number;
    arName:string;
    enName:string;
    logo:string;
    note:string;
    categories:category []=[];

}


export class category
{
    id:number;
    arName:string;
    enName:string;
    categoryImage:string;
    note:string;
    items:item[]=[];
}
export class item
{
    id:number;
    arName:string;
    enName:string;
    itemImage:string;
    note:string;
    price:number;
    sizes:size[]=[];
}
export class size
{
    id:number;
    arName:string;
    enName:string;
    price:number;
    note:string;
}