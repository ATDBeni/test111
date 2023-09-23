import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecentComponent } from './blog/recent/recent.component';
import { PopularComponent } from './blog/popular/popular.component';
import { OldestComponent } from './blog/oldest/oldest.component';

const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent}, 
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'oldest', component: OldestComponent },


 

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ContactComponent,
    BlogComponent,
    RecentComponent,
    PopularComponent,
    OldestComponent,
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)
  ],
    MatCardModule,
    BrowserAnimationsModule,
    MatButtonModule,
  
  ],
  exports: [RouterModule],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
