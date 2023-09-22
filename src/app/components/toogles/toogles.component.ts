import { Component } from '@angular/core';

@Component({
  selector: 'app-toogles',
  templateUrl: './toogles.component.html',
  styleUrls: ['./toogles.component.scss'],
})
export class TooglesComponent {
  engLanguage = {
    all: 'All',
    server: 'Server',
    client: 'Client',
    language: 'Language:',
    theame: 'Color Theme',
    dark: 'Dark',
    white: 'White',
    blue: 'Blue',
    red: 'Red',
    search: 'Search...',
  };
  ruLanguage = {
    all: 'все',
    server: 'Сервер',
    client: 'Клиент',
    language: 'Язык:',
    theame: 'Цвет темы',
    dark: 'Темная',
    white: 'Белая',
    blue: 'Синяя',
    red: 'Красная',
    search: 'Поиск...',
  };
  selectlang = this.ruLanguage;

  switchRu(): void {
    this.selectlang = this.ruLanguage;
  }

  switchEng(): void {
    this.selectlang = this.engLanguage;
  }
}
