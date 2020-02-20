import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SqrtPipe } from './ng-pipes/ng-pipes.pipe';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgPipesComponent } from './ng-pipes/ng-pipes.component';
import { NgReactiveFormsComponent } from './ng-reactive-forms/ng-reactive-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
    NgPipesComponent,
    NgReactiveFormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
