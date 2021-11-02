export class Shoes {
  public name!: string
  public genre!: string
  public type!: string
  public release!: boolean
  public color!: string
  public price!: number
  public imgUrl!: string
  public size!: Array<number>

  constructor (
    name: string,
    genre: string,
    type: string,
    release: boolean,
    color: string,
    price: number,
    imgUrl: string,
    size: Array<number>
  ) {
    this.name = name
    this.genre = genre
    this.type = type
    this.release = release
    this.color = color
    this.price = price
    this.imgUrl = imgUrl
    this.size = size
  }
}
