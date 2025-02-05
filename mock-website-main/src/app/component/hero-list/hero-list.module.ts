import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HeroListComponent} from './hero-list.component';

@NgModule({
	declarations: [
		HeroListComponent
	],
	exports: [
		HeroListComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		NgOptimizedImage,
	]
})
export class HeroListModule {

}
