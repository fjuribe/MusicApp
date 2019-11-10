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
      'Authorization':'Bearer BQByqLEuPegoaqu6K-A9wfdLqQqrf7vC8kREkcGmEIOUdbChWcp1U6uEGSUIXRcFAm3MaASfOJUtESO7nug'
    });
    return this.http.get(url,{headers});
  }


  getNewReleases(){
      return this.getQuery('browse/new-releases')
                 .pipe(map(data=>{
                    return data.albums.items;
                }));
     }



  getArtista(termino:string){
       
      return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
                 .pipe(map(data=>{
                     return data.artists.items;
                  }));
     } 
   }
