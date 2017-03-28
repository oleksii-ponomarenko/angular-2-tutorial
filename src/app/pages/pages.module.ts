import { NgModule } from '@angular/core';
import { LayoutModule } from '../components/layout/layout.module';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
	imports:      [ HomepageModule ],
	exports:      [ HomepageModule ],
	declarations: [ ],
	providers:    [ ],
})
export class PagesModule { name = 'PagesModule' };
