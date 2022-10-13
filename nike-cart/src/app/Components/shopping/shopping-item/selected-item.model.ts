export interface selectedShoes {
    id: number | string;
    name: string
    gender: string
    type: string
    release: boolean
    color: string
    price: number
    imgUrl: string
    itemImgs: Array<string>
    size: Array<number>
    amount:number
    selectedSize: number
    total_value:number
}