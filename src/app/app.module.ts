import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//para poser relizar peticiones
import { HttpClientModule } from '@angular/common/http';

//Importar rutas
import { ROUTES } from './app.routes';



//services
// import { SpotifyService } from './services/spotify.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES,{useHash:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
