import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro.model';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-add-livro',
  templateUrl: './add-livro.component.html',
  styleUrls: ['./add-livro.component.css'],
})
export class AddLivroComponent implements OnInit {
  livro: Livro = {
    titulo: '',
    descricaoCurta: '',
    descricaoLonga: '',
    autoria: '',
    preco: 0,
    emEstoque: false,
  };
  submitted = false;

  constructor(private livroService: LivroService) {}

  ngOnInit(): void {}

  saveLivro(): void {
    const data = {
      titulo: this.livro.titulo,
      descricaoCurta: this.livro.descricaoCurta,
    };

    this.livroService.create(data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e: any) => console.error(e),
    });
  }

  newLivro(): void {
    this.submitted = false;
    this.livro = {
      titulo: '',
      descricaoCurta: '',
      descricaoLonga: '',
      autoria: '',
      preco: 0,
      emEstoque: false,
    };
  }
}
