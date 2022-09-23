export class Shoes {
  public id!: number;
  public name!: string
  public gender!: string
  public type!: string
  public release!: boolean
  public color!: string
  public price!: number
  public imgUrl!: string
  public itemImgs!: Array<string>
  public size!: Array<number>

  constructor (
    id: number,
    name: string,
    gender: string,
    type: string,
    release: boolean,
    color: string,
    price: number,
    imgUrl: string,
    itemImgs: Array<string>,
    size: Array<number>
  ) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.type = type;
    this.release = release;
    this.color = color;
    this.price = price;
    this.imgUrl = imgUrl;
    this.itemImgs = itemImgs;
    this.size = size;
  }
}
