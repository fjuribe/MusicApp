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
      'Authorization':'Bearer BQA9bnMAGYomRG_DuuzqAI34kKbg4LbeNOofdXYU2JA-ZUOxG9GT2OEfLL5qfWyrtYJItZ_V3kqRGQGmCvY'
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
