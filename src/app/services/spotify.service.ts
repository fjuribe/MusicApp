import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("spotify service lista!!");
  }


  getQuery(query:string){
    const url=`https://api.spotify.com/v1/${query}`;
    const headers= new HttpHeaders({
      'Authorization':'Bearer BQCOsvQWUlfVtLJeoGH6gJPZ0TvDupFlmv-2hMH5pCS8XC0YgqnsobUAkJyCjjNgJt1BnviptGBuECZ_54M'
    });
    return this.http.get(url,{headers});
  }


  getNewReleases(){
      return this.getQuery('browse/new-releases')
                 .pipe(map(data=>{
                    return data.albums.items;
                }));
     }



  getArtistas(termino:string){
       
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                 .pipe(map(data=>{
                     return data.artists.items;
                  }));
     } 


      getArtista(id:string){
       
      return this.getQuery(`artists/${id}`);
                 // .pipe(map(data=>{
                 //     return data.artists.items;
                  // }));
     } 

    getTopTracks(id:string){
      return this.getQuery(`artists/${id}/top-tracks?country=us`)
                 .pipe(map(data=>data['tracks']));
    }

   }
