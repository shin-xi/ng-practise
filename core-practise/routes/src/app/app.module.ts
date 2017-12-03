import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ArticlesComponent } from './articles/articles.component';
import { AuthService } from './service/auth.service';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoginGuard } from './guard/login.guard';
import { MainComponent } from './main/main.component';
import { ProductsComponent, routes as childRoutes } from './products/products.component';
import { ByIdComponent } from './by-id/by-id.component';
import { InterestComponent } from './interest/interest.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent, children: childRoutes },
  { path: 'articles/:id', component: ArticlesComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [LoginGuard] },
  { path: 'contactus', redirectTo: 'contact' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    ArticlesComponent,
    LoginComponent,
    ProtectedComponent,
    MainComponent,
    ProductsComponent,
    ByIdComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }) // <-- debugging purposes only)
  ],
  providers: [
    { provide: AuthService, useClass: AuthService },
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
