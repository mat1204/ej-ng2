import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from '../hero.service';
import { Hero } from '../hero'

@Component({
  selector: 'hero-detail',
  template: `
	  <div *ngIf="hero">

	    <h2>{{hero.nombre}} details!</h2> 
	    <div><label>id: </label>{{hero.id}}</div>

	    <div>
	      <label>name: </label>
	      <input [(ngModel)]="hero.nombre" placeholder="Nombre"/>
	    </div>

	    <button (click)="volver()">Back</button>

	  </div>
	`,
  styleUrls: ['./hero-detail.component.css'],
  providers: [SpecialSuperHeroService]
})
export class HeroDetailComponent implements OnInit {

	@Input()
	hero: Hero;	

	constructor(private heroService: SpecialSuperHeroService,
				private route: ActivatedRoute)
				{ }

	ngOnInit() : void{
		this.route.params.forEach((params : Params) => {
			let id = + params['id'];

			this.heroService.obtenerHeroe(id)
				.then(hero => this.hero = hero);
		});
	}

	volver(): void {
		window.history.back();
	}

}
