import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';



@NgModule({
  declarations: [HeaderComponent,MobileNavComponent,DesktopNavComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,MobileNavComponent,DesktopNavComponent]
})
export class HeaderModule { }
