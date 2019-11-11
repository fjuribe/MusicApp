import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

 nuevasCanciones:any[]=[];
 loanding:boolean;
 error:boolean;
 mensajeError:string;

  constructor(private spotify:SpotifyService) { 
    this.error=false;
    this.loanding=true;

    this.spotify.getNewReleases().subscribe((data:any)=>{
         console.log(data);
         
         this.nuevasCanciones=data;
         this.loanding=false;

    },(errorservicio)=>{
      this.loanding=false;
      this.error=true;
      console.log(errorservicio);
      this.mensajeError=errorservicio.error.error.message;
    });
  }

  ngOnInit() {
  }

}
