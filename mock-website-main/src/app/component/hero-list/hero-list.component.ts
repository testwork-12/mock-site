import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth/auth.service';
import {take, tap} from 'rxjs/operators';
import {Hero} from '@model/hero';
import {HeroService} from '@service/hero.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
	selector: 'hero-list',
	templateUrl: './hero-list.component.html',
	styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
	heroListObservable: Observable<Array<Hero>>;

	constructor(public heroService: HeroService,
							public authService: AuthService,
							public router: Router) {
	}

	ngOnInit() {
		this.heroListObservable = new Observable<Array<Hero>>();
		this.reloadData();
	}

	reloadData() {
		this.heroListObservable = this.heroService.getEntityList().pipe(
			take(1),
			tap(
				heroList => {
					heroList.sort((a, b) => a.name.localeCompare(b.name));
				}
			));
	}

	redirectToHeroCreation() {
		this.router.navigate(['/hero-create']);
	}

	redirectToHeroEdition(heroId: number) {
		this.router.navigate(['/hero-edit'], {queryParams: {id: heroId}});
	}
}
