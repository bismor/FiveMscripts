import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeComponent } from './native.component';

@NgModule({
  declarations: [NativeComponent],
  imports: [CommonModule],
  exports: [NativeComponent],
})
export class NativeModule {}
