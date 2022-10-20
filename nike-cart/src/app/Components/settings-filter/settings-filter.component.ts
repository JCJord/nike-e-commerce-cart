import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';
import { Shoes } from '../shopping/shoes.model';

export interface colors {
  name:string,
  code:string,
  isSelected:boolean,
}

@Component({
  selector: 'app-settings-filter',
  templateUrl: './settings-filter.component.html',
  styleUrls: ['./settings-filter.component.scss']
})
export class SettingsFilterComponent implements OnInit {

  open = true;
  
  colors: Array<colors> = [
    {
      name: 'Amarelo',
      code: '#fcec03',
      isSelected: false,
    },
    {
      name: 'Azul',
      code: '#03a1fc',
      isSelected: false,
    },
    {
      name: 'Bege',
      code: '#ead2a8',
      isSelected: false,
    },
    {
      name: 'Branco',
      code: '#fff',
      isSelected: false,
    },
    {
      name: 'Cinza',
      code: 'lightgrey',
      isSelected: false,
    },
    {
      name: 'Laranja',
      code: 'orange',
      isSelected: false,
    },
    {
      name: 'Marrom',
      code: '#753e07',
      isSelected: false,
    },
    {
      name: 'Preto',
      code: '#000',
      isSelected: false,
    },
    {
      name:'Rosa',
      code: 'pink',
      isSelected: false,
    },
    {
      name: 'Roxo',
      code: '#5f03ff',
      isSelected: false,
    },
    {
      name: 'Verde',
      code: '#03ff70',
      isSelected: false,
    },
    {
      name: 'Vermelho',
      code: '#fc264d',
      isSelected: false,
    },
    {
      name: 'Vinho',
      code: '#8f1f34',
      isSelected: false,
    }
  ];

  colorCopy = [...this.colors];
  currentState: any;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.resetSelection();
  }

  filterByColor(color: string, code: string) {
    const isColorAlreadySelected = this.colors.find(color => color.code === code);

    if(isColorAlreadySelected?.isSelected){
      let counter = 0;
      let selectedColors = []
      for(let color of this.colors){
        if(color.isSelected){
          selectedColors.push({name: color.name})
          counter++;
        }
      }
      if(counter > 1){
        const notSelectedColor = this.colors.find(allColors => allColors.name.toLowerCase() != color.toLocaleLowerCase());
        const selectedColor = this.colors.find(allColors => allColors.name.toLowerCase() === color.toLowerCase());
        this.shoppingListService.unselectFilteredColor(notSelectedColor!.name);
        this.colors = this.colorCopy;
        this.colors = this.getAvailableColors(notSelectedColor!.name)
        this.colors.push({name: notSelectedColor!.name, code: notSelectedColor!.code, isSelected : false});
        const newIndex = this.colors.findIndex(colors => colors.code === notSelectedColor!.code);
        this.selectColor(newIndex);

      }else {
        this.shoppingListService.getAllShoes();
        this.colors = this.colorCopy;
      }

    } else {
      this.shoppingListService.filterItemByColor(color);
    
      
      this.colors = this.getAvailableColors(color);
      this.colors.push({name: color, code: code, isSelected: false});
      const newIndex = this.colors.findIndex((color)=> color.code === code);
  
      this.selectColor(newIndex);
    }
  }

  getAvailableColors(color: string):Array<colors> {
    let allShoes: Array<Shoes> = [];

    this.shoppingListService.getShoes().subscribe((shoes)=>{
      allShoes = shoes;
    });

    let avaialableColors:any  = [];

    allShoes.forEach((item:any)=>{
      avaialableColors.push({name: item.color.toLowerCase().replace(color.toLowerCase(),'').replace('/','').trim()});
    });

    avaialableColors = avaialableColors.filter((x: colors) => x.name.length != 0).flat();
    
    let currentColors = avaialableColors.map((availableColor: colors) => this.colors.filter((colorItem: colors) => colorItem.name.toLowerCase() === availableColor.name )).flat();
    const noDuplicates: Array<colors> = Array.from(new Set(currentColors));
    
    return noDuplicates;
  }
  
  selectColor(index: number) {
    this.colors[index].isSelected = true;
  }

  resetSelection() {
    this.colors = this.colorCopy;
    this.shoppingListService.getAllShoes();
  }

}
