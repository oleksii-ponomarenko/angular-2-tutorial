import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';

import { LayoutComponent } from './layout.component';

@NgModule({
	imports: [ MaterializeModule ],
	exports: [ LayoutComponent ],
	declarations: [ LayoutComponent ],
	providers: [],
})
export class LayoutModule { }
