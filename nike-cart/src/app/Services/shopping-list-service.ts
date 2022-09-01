import { Shoes } from '../Components/shopping/shoes.model'

export class ShoppingListService {
  shoes: Shoes[] = [
    new Shoes(
      'Chuteiras Nike Mercurial Superfly 8 Elite KM',
      'Unissex',
      'Adulto / Campo',
      true,
      'lilás',
      1699.99,
      'https://images.lojanike.com.br/320x320/produto/chuteirasnike-mercurial-superfly-8-elite-km-unissex-DB2859-506-1-11634658388.jpg',
      ['https://images.lojanike.com.br/320x320/produto/chuteirasnike-mercurial-superfly-8-elite-km-unissex-DB2859-506-1-11634658388.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA10.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA11.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA12.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA13.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA14.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA15.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA16.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA17.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA18.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA19.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA20.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA21.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA22.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA23.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA24.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA7.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA8.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA9.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Chuteira Nike Mercurial Superfly 8 Pro KM',
      'Unissex',
      'Adulto / Campo',
      true,
      'lilás/vermelho',
      949.99,
      'https://images.lojanike.com.br/320x320/produto/chuteira-nike-mercurial-superfly-8-pro-unissex-DJ3977-506-1-11635263663.jpg',
      ['https://images.lojanike.com.br/320x320/produto/chuteira-nike-mercurial-superfly-8-pro-unissex-DJ3977-506-1-11635263663.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA10.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA11.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA12.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA13.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA14.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA15.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA16.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA17.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA18.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA19.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA20.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA21.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA22.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA23.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA24.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA7.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA8.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA9.jpg'],
      [39, 40, 41, 42, 43, 44, 45]
    ),
    new Shoes(
      'Tênis Nike Kyrie Low 4',
      'Unissex',
      'Casual',
      false,
      'branco',
      799.99,
      'https://images.lojanike.com.br/500x500/produto/tenis-nike-kyrie-low-4-unissex-CW3985-006-1-11634658364.jpg',
      ['https://images.lojanike.com.br/500x500/produto/tenis-nike-kyrie-low-4-unissex-CW3985-006-1-11634658364.jpg','https://artwalk.vteximg.com.br/arquivos/ids/241052-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-2.jpg?v=637739603448400000','https://artwalk.vteximg.com.br/arquivos/ids/241053-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-3.jpg?v=637739603717530000','https://artwalk.vteximg.com.br/arquivos/ids/241054-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-4.jpg?v=637739603810000000','https://artwalk.vteximg.com.br/arquivos/ids/241055-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-5.jpg?v=637739603892070000','https://artwalk.vteximg.com.br/arquivos/ids/241056-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-6.jpg?v=637739603965430000'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Air Max AP',
      'Masculino',
      'Casual',
      false,
      'branco',
      509.99,
      'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-ap-CU4826-100-1-11621539990.jpg',
      ['https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-ap-CU4826-100-1-11621539990.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A1.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A2.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A3.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A4.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A5.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A6.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A7.jpg'],

      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Blazer Low X',
      'Masculino',
      'Casual',
      false,
      'branco',
      599.99,
      'https://images.lojanike.com.br/500x500/produto/tenis-nike-blazer-low-x-masculino-DA2045-100-1.jpg',
      ['https://images.lojanike.com.br/500x500/produto/tenis-nike-blazer-low-x-masculino-DA2045-100-1.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A1.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A2.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A3.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A4.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A5.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A6.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A7.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Sportswear Blazer Low 77',
      'Masculino',
      'Casual',
      false,
      'branco',
      549.99,
      'https://images.lojanike.com.br/500x500/produto/tenis-blazer-low-77-suede-DA7254-001-1-11628869372.jpg',
      ['https://images.lojanike.com.br/500x500/produto/tenis-blazer-low-77-suede-DA7254-001-1-11628869372.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA7.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Air Infinity 2',
      'Masculino',
      'Casual',
      false,
      'branco',
      509.99,
      'https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-infinity-2-CU9452-300-1-11628868522.jpg',
      ['https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-infinity-2-CU9452-300-1-11628868522.jpg','https://imgnike-a.akamaihd.net/1300x1300/0105827TA3.jpg','https://images.tcdn.com.br/img/img_prod/770541/tenis_nike_air_max_infinity_2_masculino_verde_militar_7963_2_54fe36bc91e16042645030fbb38237c7.jpg','https://images.tcdn.com.br/img/img_prod/734952/tenis_nike_air_max_infinity_2_masculino_verde_musgo_3319_3_ed6b8619f8f91149232c63d71674afd9.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Winflo 8',
      'Masculino',
      'Corrida',
      false,
      'Cinza',
      549.99,
      'https://images.lojanike.com.br/500x500/produto/tenis-nike-winflo-8-CW3419-004-1-11628868691.jpg',
      ['https://images.lojanike.com.br/500x500/produto/tenis-nike-winflo-8-CW3419-004-1-11628868691.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA7.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Chinelo Nike Offcourt',
      'Masculino',
      'Casual',
      true,
      'branco',
      229.99,
      'https://images.lojanike.com.br/500x500/produto/chinelo-nike-offcourt-slide-BQ4639-017-1-11628866188.jpg',
      ['https://images.lojanike.com.br/500x500/produto/chinelo-nike-offcourt-slide-BQ4639-017-1-11628866188.jpg','https://imgnike-a.akamaihd.net/1300x1300/006582IFA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/006582IFA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/006582IFA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/006582IFA4.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Sportswear Air Max 97',
      'Masculino',
      'Casual',
      true,
      'branco',
      789.99,
      'https://imgnike-a.akamaihd.net/1300x1300/013645ID.jpg',
      ['https://imgnike-a.akamaihd.net/1300x1300/013645ID.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA10.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA11.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA7.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA8.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA9.jpg'],
      [39, 40, 41, 42]
    )
  ]

  getShoes () {
    return this.shoes
  }

  getAmountOfShoes () {
    return this.shoes.length
  }

  getItem (index: number) {
    return this.shoes[index]
  }
}
