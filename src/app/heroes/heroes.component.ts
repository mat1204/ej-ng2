import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service'

@Component({
  selector: 'mis-heroes',
  templateUrl: `
  		<!--
  	  		<div *ngIf="heroeSeleccionado">
			   <h2>{{heroeSeleccionado.name}} details!</h2>
			   <div><label>id: </label>{{heroeSeleccionado.id}}</div>
  			 <div>
  			   <label>Nombre: </label>
  			   <input [(ngModel)]="heroeSeleccionado.nombre" placeholder="Nombre"/>
  			 </div>
		  </div>

      	<hero-detail [hero]="heroeSeleccionado"></hero-detail>

		-->

		<div *ngIf="heroeSeleccionado">
		  <h2>
		    {{heroeSeleccionado.nombre | uppercase}} is my hero
		  </h2>
		  <button (click)="verDetalle()">Ver Detalle</button>
		</div>

		<h2> Listado de Heroes </h2>
  		<ul class="heroes">
  			<li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === heroeSeleccionado">
	  		    <span class="badge">{{hero.id}}</span> {{hero.nombre}}
			   </li>
		 </ul>   
  `,
   styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];
	heroeSeleccionado : Hero;


	constructor(
		private router: Router,
		private heroService: HeroService) {

	}

	onSelect(heroe: Hero): void {
		this.heroeSeleccionado = heroe;
	}

	ngOnInit(): void {
		this.obtenerHeroes();
	}

	obtenerHeroes(): void {
		this.heroService.obtenerHeroes().then(heroes => this.heroes = heroes);
	}

	verDetalle(): void {
		this.router.navigate(['/detail', this.heroeSeleccionado.id])
	}

}
