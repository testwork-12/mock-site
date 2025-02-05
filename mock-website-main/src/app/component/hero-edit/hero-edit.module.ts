import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroEditComponent} from './hero-edit.component';

@NgModule({
	declarations: [
		HeroEditComponent
	],
	exports: [
		HeroEditComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		NgOptimizedImage,
	]
})
export class HeroEditModule {

}
