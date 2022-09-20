import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { DesktopNavComponent } from './desktop-nav/desktop-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent,MobileNavComponent,DesktopNavComponent],
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule
  ],
  exports:[HeaderComponent,MobileNavComponent,DesktopNavComponent]
})
export class HeaderModule { }
