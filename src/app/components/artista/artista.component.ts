import { Component } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent{
artista:any[]=[];
esperarartista:boolean;
topTracks:any[]=[];

  constructor(private router:ActivatedRoute,private spotify:SpotifyService) { 

      this.esperarartista=true;
      this.router.params.subscribe( params => {
        this.getArtista(params['id']);
        this.getTopTracks(params['id']);
        //this.esperarartista=false;
     });

    }



    getArtista(id:string){
    	this.esperarartista=true;
       this.spotify.getArtista(id).subscribe(artista=>{
              console.log(artista);
              this.artista=artista;
              this.esperarartista=false;
       });
    }

     getTopTracks(id:string){
       
       this.spotify.getTopTracks(id)
           .subscribe(topTracks=>{
           	  console.log(topTracks);
           	  this.topTracks=topTracks;
           });
                 // .pipe(map(data=>{
                 //     return data.artists.items;
                  // }));
     } 
}