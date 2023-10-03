import { Injectable } from '@angular/core';
import { Native } from './components/native';
import { NATIVELISTLUA } from './native-list';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getNatives(): Native[] {
    return NATIVELISTLUA;
  }
}
