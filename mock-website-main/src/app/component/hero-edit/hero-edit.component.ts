import {Component, OnInit} from '@angular/core';
import {distinctUntilChanged, switchMap, tap} from 'rxjs/operators';
import {HeroService} from '@service/hero.service';
import {Hero} from '@model/hero';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'hero-edit',
	templateUrl: './hero-edit.component.html',
	styleUrls: ['./hero-edit.component.css']
})
export class HeroEditComponent implements OnInit {
	public heroId: number;
	public heroObservable: Observable<Hero>;

	constructor(public heroService: HeroService,
							public route: ActivatedRoute,
							public router: Router) {
		this.heroId = 0;
	}

	ngOnInit() {
		this.heroObservable = this.route.queryParams.pipe(
			distinctUntilChanged(
				(previous, current) => previous.id === current.id
			),
			tap(queryParams => this.heroId = queryParams.id),
			switchMap(
				queryParams => queryParams.id ? this.heroService.getEntity(queryParams.id) : new Observable<Hero>()
			)
		);
	}

	editHero(hero: Hero) {
		this.heroService.updateEntity(hero).subscribe(
			() => {
				this.redirectToListView();
			});
	}

	deleteHero(id: number) {
		this.heroService.deleteEntity(id).subscribe(
			() => {
				this.redirectToListView();
			}
		);
	}

	redirectToListView() {
		this.router.navigate(['/']);
	}
}
