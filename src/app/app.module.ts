
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
