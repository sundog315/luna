/**
 * Created by liuzheng on 2017/8/30.
 */

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'; // <-- NgModel lives here
import {Logger, Options, Level as LoggerLevel} from 'angular2-logger/core';
import {HttpModule} from '@angular/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {NavComponent} from './BasicPage/nav/nav.component';
import {LoginComponent} from './BasicPage/login/login.component';
import {FooterComponent} from './BasicPage/footer/footer.component';
import {PageNotFoundComponent} from './BasicPage/not-found.component';

import {IleftbarComponent} from './IndexPage/ileftbar/ileftbar.component';
import {SearchComponent} from './ControlPage/search/search.component';
import {CleftbarComponent} from './ControlPage/cleftbar/cleftbar.component';
import {ControlComponent} from './ControlPage/control/control.component';
import {ControlnavComponent} from './ControlPage/control/controlnav/controlnav.component';
import {RdpComponent} from './ControlPage/control/rdp/rdp.component';
import {SshComponent} from './ControlPage/control/ssh/ssh.component';
import {ControlPageComponent} from './ControlPage/controlpage.component';
import {IndexPageComponent} from './IndexPage/index-page.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,

    RdpComponent,
    SshComponent,
    SearchComponent,
    IleftbarComponent,
    CleftbarComponent,
    ControlComponent,
    ControlnavComponent,
    ControlPageComponent,
    IndexPageComponent
    // HeroListComponent,
    // CrisisListComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: Options, useValue: {store: false, level: LoggerLevel.WARN}},
    Logger
  ]
})
export class AppModule {
}
