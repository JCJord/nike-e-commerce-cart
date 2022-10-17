import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MobileSideMenuComponent } from './mobile-nav/mobile-side-menu/mobile-side-menu.component';



@NgModule({
  declarations: [HeaderComponent,MobileNavComponent,DesktopNavComponent, MobileSideMenuComponent, MobileSideMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  exports:[HeaderComponent,MobileNavComponent,DesktopNavComponent, MobileSideMenuComponent]
})
export class HeaderModule { }
