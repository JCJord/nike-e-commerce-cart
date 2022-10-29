import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { colors } from '../components/settings-filter/settings-filter.component';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  currentColors$: BehaviorSubject<any> = new BehaviorSubject('');

  constructor() { }

  setCurrentColor(state: colors[]) {
    this.currentColors$.next(state);
  }

  getCurrentColor()  {
    return this.currentColors$.asObservable();
  }
}
