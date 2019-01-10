import { AddMenuSingleComponent } from './add-menu-single/add-menu-single.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AddMenuComponent } from './add-menu/add-menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';

const inrRoute: Routes = [
  {
    path: '', children: [
      { path: '', redirectTo: 'nested', pathMatch: 'full' },
      { path: 'nested', component: AddMenuComponent },
      { path: 'single', component: AddMenuSingleComponent },
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AddMenuComponent,
    AddMenuSingleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(inrRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
