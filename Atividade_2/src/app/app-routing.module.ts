import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosListComponent } from './components/livros-list/livros-list.component';
import { LivroDetailsComponent } from './components/livro-details/livro-details.component';
import { AddLivroComponent } from './components/add-livro/add-livro.component';

const routes: Routes = [
  { path: '', redirectTo: 'livros', pathMatch: 'full' },
  { path: 'livros', component: LivrosListComponent },
  { path: 'livros/:id', component: LivroDetailsComponent },
  { path: 'add', component: AddLivroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
