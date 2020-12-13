

import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { OktaAuthModule } from '@okta/okta-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ArticleComponent } from './article/article.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { ComparisonGraphComponent } from './comparison-graph/comparison-graph.component';
import { DoughnutGraphComponent } from './doughnut-graph/doughnut-graph.component';
import { AboutComponent } from './about/about.component';
import { P404Component } from './p404/p404.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

const config = {
  issuer: 'https://dev-7491470.okta.com/',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa25njsdyRjXssWM5d6'
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    FooterComponent,
    HomepageComponent,
    ArticleComponent,
    SignUpComponent,
    SignInComponent,
    BarGraphComponent,
    ComparisonGraphComponent,
    DoughnutGraphComponent,
    AboutComponent,
    P404Component,
    LoginComponent,
    AdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    OktaAuthModule.initAuth(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
