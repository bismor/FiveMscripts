import { Component } from '@angular/core';
import { Native, Argument } from '../native';
import { NATIVELISTLUA } from '../../native-list';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss'],
})
export class NativeComponent {
  natives = NATIVELISTLUA;

  trackByFn(index: number, native: Native) {
    console.log(native.hash);
    return native.hash;
  }

  selectedNative!: Native;

  onSelect(native: Native): void {
    this.selectedNative = native;
  }
}
