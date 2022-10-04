export interface selectedShoes {
    id: number;
    name: string
    gender: string
    type: string
    release: boolean
    color: string
    price: number
    imgUrl: string
    itemImgs: Array<string>
    size: Array<number>
    selectedSize: number
}