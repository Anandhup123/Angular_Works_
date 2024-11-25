import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgifComponent } from './ngif/ngif.component';

const routes: Routes = [
  {path:'',component:ReactiveFormsComponent},
  {path:'ngif',component:NgifComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
