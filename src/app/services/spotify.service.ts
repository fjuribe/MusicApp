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
      'Authorization':'Bearer BQBsTntM9hULiqlZpoo45BTH4Y-yw_-9aCxiDx4SK7ZWiSTRoDMxMt0Qi5LI4645kVleM-qMoPthyqrr8Fg'
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
   }
