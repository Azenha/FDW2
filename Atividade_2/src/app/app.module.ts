import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddLivroComponent } from './components/add-livro/add-livro.component';
import { LivroDetailsComponent } from './components/livro-details/livro-details.component';
import { LivrosListComponent } from './components/livros-list/livros-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddLivroComponent,
    LivroDetailsComponent,
    LivrosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
