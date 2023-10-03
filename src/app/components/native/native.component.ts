import { Component } from '@angular/core';
import { Native } from '../native';
import { NATIVELISTLUA } from '../../native-list';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss'],
})
export class NativeComponent {
  natives: Native[] = [];

  constructor(private dataService: DataService) {}

  getNatives(): void {
    this.natives = this.dataService.getNatives();
  }

  ngOnInit(): void {
    this.getNatives();
  }

  trackByFn(index: number, native: Native) {
    console.log(native.hash);
    return native.hash;
  }

  selectedNative!: Native;

  onSelect(native: Native): void {
    this.selectedNative = native;
  }
}
