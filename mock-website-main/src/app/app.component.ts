import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '@service/auth/auth.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	public title = 'MOCK Project showing a list of heroes';
	public smallTitle = 'MOCK Project';
	public isAuthenticated;

	constructor(public router: Router,
							public authService: AuthService) {
		this.isAuthenticated = false;
	}

	ngOnInit() {
		this.authService.isAuthenticated().then(isAuthenticated => {
			this.isAuthenticated = isAuthenticated;
		});
	}
}
