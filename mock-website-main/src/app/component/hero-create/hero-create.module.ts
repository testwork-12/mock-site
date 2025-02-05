import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroCreateComponent} from './hero-create.component';

@NgModule({
	declarations: [
		HeroCreateComponent
	],
	exports: [
		HeroCreateComponent
	],
	imports: [
		CommonModule,
		FormsModule,
	]
})
export class HeroCreateModule {

}
