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


  getNewReleases(){
  	 const headers= new HttpHeaders({
  	 	'Authorization':'Bearer BQArwsH5qaXJ76jcPw2Yga1IEFZFOQgUf5sjogKPYfK_SOjK483F5qwafjQibk2_9iyfH-_EbHx0l7FbBks'
  	 });
     return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers})
                .pipe(map(data=>{
                    return data.albums.items;
                }));
     }



     getArtista(termino:string){
       
       const headers= new HttpHeaders({
         'Authorization':'Bearer BQArwsH5qaXJ76jcPw2Yga1IEFZFOQgUf5sjogKPYfK_SOjK483F5qwafjQibk2_9iyfH-_EbHx0l7FbBks'
       });
       return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers})
                  .pipe(map(data=>{
                     return data.artists.items;
                  }));
     } 
   }
