import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooglesComponent } from './toogles.component';

@NgModule({
  declarations: [TooglesComponent],
  imports: [CommonModule],
  exports: [TooglesComponent],
})
export class TooglesModule {}
