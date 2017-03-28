import { NgModule } from '@angular/core';

import { HomepageComponent } from './homepage.component';
import { LayoutModule } from '../../components/components.barrel';
import { HomepageRoutingModule, routedComponents } from './homepage.routing';

@NgModule({
	imports:      [ HomepageRoutingModule, LayoutModule ],
	exports:      [ routedComponents ],
	declarations: [ routedComponents ],
	providers:    [ ],
})
export class HomepageModule { }
