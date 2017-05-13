import { Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private _activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesService.getHeroe(params['id']);
    });
  }

  volver() {
    this._router.navigate(['heroes']);
  }

}
