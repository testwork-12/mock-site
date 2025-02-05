import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '@environments/environment';
import {Hero} from '@model/hero';
import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class HeroService {
	public baseUrl: string;

	public constructor(public http: HttpClient) {
		this.baseUrl = environment.apiUrl + '/api/hero';
	}

	getEntity(id: number): Observable<Hero> {
		return this.http.get<Hero>(`${this.baseUrl}/id=${id}`);
	}

	getEntityList(): Observable<Array<Hero>> {
		return this.http.get<Array<Hero>>(`${this.baseUrl}/list`);
	}

	updateEntity(entity: Hero): Observable<Hero> {
		return this.http.put<Hero>(`${this.baseUrl}/update`, entity);
	}

	deleteEntity(id: number): Observable<number> {
		return this.http.delete<number>(`${this.baseUrl}/delete/id=${id}`);
	}

	createEntity(entity: Hero): Observable<Hero> {
		return this.http.post<Hero>(`${this.baseUrl}/create`, entity);
	}
}
