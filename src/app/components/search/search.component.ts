import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent  {

  constructor(private spotify:SpotifyService) { }

artistas:any[]=[];
loanding:boolean;
buscar(termino:string){

   console.log(termino);
   this.loanding=true;
   
   this.spotify.getArtista(termino)
       .subscribe((data:any)=>{
   	     console.log(data);
   	     this.artistas=data;
          this.loanding=false;
   })
}
}
