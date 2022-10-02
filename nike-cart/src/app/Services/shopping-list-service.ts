import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { Shoes } from '../Components/shopping/shoes.model'

export class ShoppingListService {
  private shoes: Shoes[] = [
    new Shoes(
      0,
      'Chuteiras Nike Mercurial Superfly 8 Elite KM',
      'Unissex',
      'Adulto / Campo',
      true,
      'Roxo / vermelho',
      1699.99,
      '../../assets/images/shoes/mercurial-elite-km.webp',
      ['../../assets/images/shoes/mercurial-elite-km.webp','https://imgnike-a.akamaihd.net/1300x1300/012486NDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA10.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA11.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA12.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA13.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA14.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA15.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA16.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA17.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA18.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA19.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA20.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA21.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA22.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA23.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA24.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA7.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA8.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA9.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      1,
      'Chuteira Nike Mercurial Superfly 8 Pro KM',
      'Unissex',
      'Adulto / Campo',
      true,
      'Roxo / vermelho',
      949.99,
      '../../assets/images/shoes/mercurial-pro-km.webp',
      ['../../assets/images/shoes/mercurial-pro-km.webp','https://imgnike-a.akamaihd.net/1300x1300/012486NDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA10.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA11.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA12.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA13.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA14.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA15.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA16.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA17.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA18.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA19.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA20.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA21.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA22.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA23.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA24.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA7.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA8.jpg','https://imgnike-a.akamaihd.net/1300x1300/012486NDA9.jpg'],
      [39, 40, 41, 42, 43, 44, 45]
    ),
    new Shoes(
      2,
      'Tênis Nike Kyrie Low 4',
      'Unissex',
      'Casual',
      false,
      'Vermelho / preto',
      799.99,
      '../../assets/images/shoes/kyrie-low-4.webp',
      ['../../assets/images/shoes/kyrie-low-4.webp','https://artwalk.vteximg.com.br/arquivos/ids/241052-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-2.jpg?v=637739603448400000','https://artwalk.vteximg.com.br/arquivos/ids/241053-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-3.jpg?v=637739603717530000','https://artwalk.vteximg.com.br/arquivos/ids/241054-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-4.jpg?v=637739603810000000','https://artwalk.vteximg.com.br/arquivos/ids/241055-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-5.jpg?v=637739603892070000','https://artwalk.vteximg.com.br/arquivos/ids/241056-1000-1000/Tenis-Nike-Kyrie-Low-4-Masculino-Preto-6.jpg?v=637739603965430000'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      3,
      'Tênis Nike Air Max AP',
      'Masculino',
      'Casual',
      false,
      'Branco',
      509.99,
      '../../assets/images/shoes/airmax-ap.webp',
      ['../../assets/images/shoes/airmax-ap.webp','https://imgnike-a.akamaihd.net/1300x1300/01022952A1.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A2.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A3.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A4.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A5.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A6.jpg','https://imgnike-a.akamaihd.net/1300x1300/01022952A7.jpg'],

      [39, 40, 41, 42]
    ),
    new Shoes(
      4,
      'Tênis Nike Blazer Low X',
      'Masculino',
      'Casual',
      false,
      'Branco',
      599.99,
      '../../assets/images/shoes/blazer-low-x.webp',
      ['../../assets/images/shoes/blazer-low-x.webp','https://imgnike-a.akamaihd.net/1300x1300/01212551A1.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A2.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A3.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A4.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A5.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A6.jpg','https://imgnike-a.akamaihd.net/1300x1300/01212551A7.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      5,
      'Tênis Nike Sportswear Blazer Low 77',
      'Masculino',
      'Casual',
      false,
      'Preto',
      549.99,
      '../../assets/images/shoes/blazer-low-77.webp',
      ['../../assets/images/shoes/blazer-low-77.webp','https://imgnike-a.akamaihd.net/1300x1300/012310IDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/012310IDA7.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      6,
      'Tênis Nike Air Infinity 2',
      'Masculino',
      'Casual',
      false,
      'Verde / Preto',
      509.99,
      '../../assets/images/shoes/airmax-infinity-2.webp',
      ['../../assets/images/shoes/airmax-infinity-2.webp','https://imgnike-a.akamaihd.net/1300x1300/0105827TA3.jpg','https://images.tcdn.com.br/img/img_prod/770541/tenis_nike_air_max_infinity_2_masculino_verde_militar_7963_2_54fe36bc91e16042645030fbb38237c7.jpg','https://images.tcdn.com.br/img/img_prod/734952/tenis_nike_air_max_infinity_2_masculino_verde_musgo_3319_3_ed6b8619f8f91149232c63d71674afd9.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      7,
      'Tênis Nike Winflo 8',
      'Masculino',
      'Corrida',
      false,
      'Cinza',
      549.99,
      '../../assets/images/shoes/winflo.webp',
      ['../../assets/images/shoes/winflo.webp','https://imgnike-a.akamaihd.net/1300x1300/0111797UA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/0111797UA7.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      8,
      'Chinelo Nike Offcourt',
      'Masculino',
      'Casual',
      true,
      'Preto / laranja',
      229.99,
      '../../assets/images/shoes/offcourt-slide.webp',
      ['../../assets/images/shoes/offcourt-slide.webp','../../assets/images/shoes/offcourt-slide-2.webp','https://imgnike-a.akamaihd.net/1300x1300/006582IFA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/006582IFA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/006582IFA4.jpg'],
      [39, 40, 41, 42]
    ),
    new Shoes(
      9,
      'Tênis Nike Sportswear Air Max 97',
      'Masculino',
      'Casual',
      true,
      'Preto',
      789.99,
      '../../assets/images/shoes/airmax-97.webp',
      ['../../assets/images/shoes/airmax-97.webp','https://imgnike-a.akamaihd.net/1300x1300/013645IDA1.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA10.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA11.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA2.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA3.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA4.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA5.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA6.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA7.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA8.jpg','https://imgnike-a.akamaihd.net/1300x1300/013645IDA9.jpg'],
      [39, 40, 41, 42]
    )
  ];

  public isLoading: Subject<any> = new BehaviorSubject(false);
  
  private allShoes:Shoes[] = [...this.shoes];
  shoesObservable: Subject<Shoes[]> = new BehaviorSubject(this.shoes);

  constructor() {
  }

  getAllShoes() {
    this.isLoading.next(true);
    this.shoes = this.allShoes;
    this.shoesObservable.next(this.shoes);
    setTimeout(() => {
      this.isLoading.next(false);
    },400);
  }

  filterShoes(selectedFilter: string) {
    switch(selectedFilter) {
      case 'Menor Preço':
        this.isLoading.next(true);

        this.shoes = this.shoes.sort((a,b) => (a.price > b.price)? 1 : ((b.price > a.price) ? -1 : 0));
        this.shoesObservable.next(this.shoes);

        setTimeout(() => {
          this.isLoading.next(false);
        },400);
        break;

      case 'Maior Preço':
        this.isLoading.next(true);

        this.shoes = this.shoes.sort((a,b) => (a.price < b.price)? 1 : ((b.price < a.price) ? -1 : 0));
        this.shoesObservable.next(this.shoes);


        setTimeout(() => {
          this.isLoading.next(false);
        },400);
        break;

      case 'Masculino':
        this.isLoading.next(true);


        this.shoes = this.shoes.filter(filter => filter.gender === 'Masculino' || filter.gender === 'Unissex');
        this.shoesObservable.next(this.shoes);

        setTimeout(() => {
          this.isLoading.next(false);
        },400);
        break;

      case 'Lançamento':
        this.isLoading.next(true);
        this.shoes = this.shoes.filter(filter => filter.release != false);
        this.shoesObservable.next(this.shoes);

        setTimeout(() => {
          this.isLoading.next(false);
        },400);
        break;
        
        default:
        this.isLoading.next(true);
        this.shoes = this.allShoes;
        this.shoes = this.shoes.filter(filter => filter.name.toLowerCase().includes(selectedFilter.toLowerCase()));
        this.shoesObservable.next(this.shoes);

        setTimeout(() => {
          this.isLoading.next(false);
        },400)
    }

  }

  getShoes(): Observable<Shoes[]> {
    return this.shoesObservable;
  }

  getAmountOfShoes() {
    return this.allShoes.length;
  }

  getFeaturedItems() {
    let featuredItems:Shoes[] = [];
    
    for(let i = 4; i < 7; i++) {
      featuredItems.push(this.allShoes[i]);
    }

    return featuredItems;
  }

  filterItemByColor(color: string) {
    this.isLoading.next(true);
    this.shoes = this.shoes.filter(filter => filter.color.toLowerCase().includes(color.toLowerCase()));

    this.shoesObservable.next(this.shoes);

    setTimeout(() => {
      this.isLoading.next(false);
    },400)
  }

  unselectFilteredColor(color: string) {
    this.shoes = this.allShoes;
    this.filterItemByColor(color);
  }

  getItem (index: number) {
    return this.allShoes.find(shoe => shoe.id == index);
  }
}
