import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/Services/shopping-list-service';

@Component({
  selector: 'app-settings-filter',
  templateUrl: './settings-filter.component.html',
  styleUrls: ['./settings-filter.component.scss']
})
export class SettingsFilterComponent implements OnInit {

  open = false;
  
  colors = [
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

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.colors.forEach((colorSetting)=>{
      colorSetting.isSelected = false;
    })
  }

  filterByColor(color: string) {
    this.shoppingListService.filterItemByColor(color);
    
  }
  
  selectColor(index: number) {
    this.colors[index].isSelected = !this.colors[index].isSelected;

    let counter = 0;
    if(!this.colors[index].isSelected){
      this.colors.forEach((color) => {
        
        if(color.isSelected) {
          this.shoppingListService.unselectFilteredColor(color.name);
        }else {
          counter ++;
        }
        
        if(counter == this.colors.length){
          this.shoppingListService.getAllShoes();
        }
      })
    }
  
  }

  resetSelection() {
    this.colors.forEach((colorSettings)=>{
      colorSettings.isSelected = false;
    })
  }

}
