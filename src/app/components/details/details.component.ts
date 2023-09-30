import { Component, Input } from '@angular/core';
import { Native } from '../native';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  @Input() native?: Native;
}
