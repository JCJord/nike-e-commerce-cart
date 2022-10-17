import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-side-menu',
  templateUrl: './mobile-side-menu.component.html',
  styleUrls: ['./mobile-side-menu.component.scss']
})
export class MobileSideMenuComponent implements OnInit {
  
  @Input()
  menuActive!: boolean;  
  
  constructor() { }

  ngOnInit(): void {
  }

}
