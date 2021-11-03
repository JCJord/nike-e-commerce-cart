import { Shoes } from './shoes.model'

export class ShoppingListService {
  shoes: Shoes[] = [
    new Shoes(
      'ChuteirasNike Mercurial Superfly 8 Elite KM',
      'Unissex',
      'Adulto / Campo',
      true,
      'lilás',
      1699.99,
      'https://images.lojanike.com.br/320x320/produto/chuteirasnike-mercurial-superfly-8-elite-km-unissex-DB2859-506-1-11634658388.jpg',
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
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Air Max AP',
      'Masculino',
      'Casual',
      false,
      'branco',
      509.99,
      'https://images.lojanike.com.br/320x320/produto/tenis-nike-air-max-infinity-2-CU9452-300-1-11628868522.jpg',
      [39, 40, 41, 42]
    ),
    new Shoes(
      'Tênis Nike Winflo 8 ',
      'Masculino',
      'Corrida',
      false,
      'Cinza',
      549.99,
      'https://images.lojanike.com.br/500x500/produto/tenis-nike-winflo-8-CW3419-004-1-11628868691.jpg',
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
