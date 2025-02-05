import {Component} from '@angular/core';
import {HeroService} from '@service/hero.service';
import {Hero} from '@model/hero';
import {Router} from '@angular/router';

@Component({
	selector: 'hero-create',
	templateUrl: './hero-create.component.html',
	styleUrls: ['./hero-create.component.css']
})
export class HeroCreateComponent {
	public hero: Hero;

	constructor(public heroService: HeroService,
							public router: Router) {
		this.hero = new Hero();
	}

	createHero(hero: Hero) {
		this.heroService.createEntity(hero).subscribe(
			() => {
				this.redirectToListView();
			});
	}

	redirectToListView() {
		this.router.navigate(['/']);
	}
}
