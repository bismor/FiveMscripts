import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { InputModule } from 'src/app/components/input/input.module';
import { TooglesModule } from 'src/app/components/toogles/toogles.module';
import { DetailsModule } from 'src/app/components/details/details.module';
import { NativeModule } from 'src/app/components/native/native.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
    InputModule,
    TooglesModule,
    NativeModule,
  ],
})
export class MainModule {}
