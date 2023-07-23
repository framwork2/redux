import { Iproduct } from "./product";

export interface Category
{
    _id?: string,
    name: string,
    product?: Iproduct[]
}