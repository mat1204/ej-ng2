import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service'
import { HeroesComponent } from './heroes/heroes.component'


@Component({
  selector: 'app-root',
  template: `
  		<h1>{{title}}</h1>
      <!-- <mis-heroes></mis-heroes>  -->
      <nav>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
      </nav>
      
      <router-outlet></router-outlet>  
  `
})
export class AppComponent {

	title = 'Liga de la Justicia';
 
}
