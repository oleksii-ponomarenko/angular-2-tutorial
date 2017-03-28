import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { PagesModule }  from './pages/pages.module';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, PagesModule, RouterModule ],
  exports:      [ PagesModule, RouterModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { name = 'AppModule' };

