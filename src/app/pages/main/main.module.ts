import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { RouterModule } from '@angular/router';
import { InputModule } from 'src/app/components/input/input.module';
import { TooglesModule } from 'src/app/components/toogles/toogles.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: MainComponent }]),
    InputModule,
    TooglesModule,
  ],
})
export class MainModule {}
