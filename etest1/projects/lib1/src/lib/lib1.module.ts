import { NgModule } from '@angular/core';
import { Lib1Component } from './lib1.component';
import { Hello1Component } from './hello1/hello1.component';



@NgModule({
  declarations: [
    Lib1Component,
    Hello1Component
  ],
  imports: [
  ],
  exports: [
    Lib1Component
  ]
})
export class Lib1Module { }
