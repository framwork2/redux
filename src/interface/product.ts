export interface Iproduct
{
    _id?: string | number,
    name: string,
    price: number,
    chitiet: string,
    size?: string,
    img?: string | undefined,
    categoryId?: string
}