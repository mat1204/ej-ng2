import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { SpecialSuperHeroService } from '../special-super-hero.service';

@Component({
  selector: 'my-dashboard',
  template: `
  	<h3>Top Heroes</h3>
	<div class="grid grid-pad">
	  <div *ngFor="let hero of heroes" (click)="verDetalle(hero)" class="col-1-4">
	    <div class="module hero">
	      <h4>{{hero.nombre}}</h4>
	    </div>
	  </div>
	</div>
  `,
  styleUrls: ['./dashboard.component.css'],
  providers: [SpecialSuperHeroService]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: SpecialSuperHeroService,
  				private router: Router) { }

  ngOnInit(): void {
  	this.heroService.obtenerHeroes()
  		.then(heroes => this.heroes = heroes.slice(1,5));
  }
  
  verDetalle(hero: Hero): void {
  	let link = ['/detail', hero.id]
  	this.router.navigate(link)
  }

}
