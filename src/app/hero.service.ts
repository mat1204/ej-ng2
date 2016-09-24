import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

  constructor(private http: Http) {}

  obtenerHeroes(): Promise<Hero[]> {
  	return Promise.resolve(HEROES);
  }

  obtenerHeroe(id: number): Promise<Hero> {
  		return this.obtenerHeroes()
  					.then(heroes => heroes.find(hero => hero.id === id));
  }

}
