import { Shoes } from './shoes.model'

export class ShoppingListService {
  shoes: Shoes[] = [
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
      'Tênis Nike Air Max AP',
      'Masculino',
      'Casual',
      false,
      'branco',
      509.99,
      'https://images.lojanike.com.br/500x500/produto/tenis-nike-air-max-ap-CU4826-100-1-11621539990.jpg',
      [39, 40, 41, 42]
    )
  ]

  getShoes () {
    return this.shoes
  }
}
