import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NativeComponent } from './native.component';
import { DetailsModule } from '../details/details.module';

@NgModule({
  declarations: [NativeComponent],
  imports: [CommonModule, DetailsModule],
  exports: [NativeComponent],
})
export class NativeModule {}
