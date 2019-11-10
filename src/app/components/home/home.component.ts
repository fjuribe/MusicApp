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
  constructor(private spotify:SpotifyService) { 

    this.loanding=true;
    this.spotify.getNewReleases().subscribe((data:any)=>{
         console.log(data);
         
         this.nuevasCanciones=data;
         this.loanding=false;

    });
  }

  ngOnInit() {
  }

}
