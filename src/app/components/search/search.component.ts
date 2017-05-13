import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroesBuscados: any[] = [];
  termino: string;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
  }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];

      this.heroesBuscados = this._heroesService.buscarHeroes(this.termino);
      console.log(this.heroesBuscados);
    });
  }

  verHeroe(id: number) {
    this._router.navigate(['/heroe', id]);
  }
}
