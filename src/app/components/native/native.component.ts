import { Component } from '@angular/core';
import { Native } from '../native';
import { NATIVELISTLUA } from '../../native-list';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss'],
})
export class NativeComponent {
  natives = NATIVELISTLUA;
}
