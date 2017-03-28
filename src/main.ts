import './polyfills';
import 'expose-loader?$!expose-loader?jQuery!jquery';
import 'materializecss';
import 'materialize';
import 'angular2-materialize';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
	.then(success => console.log(`Bootstrap success`))
	.catch(error => console.log(error));
