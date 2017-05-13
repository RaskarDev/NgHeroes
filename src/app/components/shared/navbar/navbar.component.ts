import { Router } from '@angular/router';
import { Heroe, HeroesService } from '../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  heroesBuscados: Heroe[] = [];

  constructor(private _heroesService: HeroesService, private _router: Router) { }

  ngOnInit() {
  }


  buscarHeroe(termino: string) {
    this._router.navigate(['search', termino]);
  }
}
