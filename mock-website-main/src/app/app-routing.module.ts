import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@service/auth/auth-guard.service';
import {environment} from '@environments/environment';
import {HeroListComponent} from '@component/hero-list/hero-list.component';
import {HeroEditComponent} from '@component/hero-edit/hero-edit.component';
import {HeroCreateComponent} from '@component/hero-create/hero-create.component';

const routes: Routes = [
	{path: '', redirectTo: 'hero-list', pathMatch: 'full'},
	{path: 'hero-list', component: HeroListComponent},
	{path: 'hero-edit', component: HeroEditComponent, canActivate: [AuthGuard], data: {roles: [environment.roles.editor]}},
	{path: 'hero-create', component: HeroCreateComponent, canActivate: [AuthGuard], data: {roles: [environment.roles.editor]}},
	{path: '**', redirectTo: 'hero-list'}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
