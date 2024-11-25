import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Bind1Component } from './bind1/bind1.component';
import { Bind2Component } from './bind2/bind2.component';
import { Bind3Component } from './bind3/bind3.component';
import { Event1Component } from './event1/event1.component';
import { Event2Component } from './event2/event2.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { Form1Component } from './form1/form1.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { NgifComponent } from './ngif/ngif.component';

@NgModule({
  declarations: [
    AppComponent,
    Bind1Component,
    Bind2Component,
    Bind3Component,
    Event1Component,
    Event2Component,
    TemplateDrivenFormComponent,
    Form1Component,
    ReactiveFormsComponent,
    NgifComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // include a import of reactive forms module 
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }