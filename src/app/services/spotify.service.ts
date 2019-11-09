import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log("spotify service lista!!");
  }


  getNewReleases(){
  	 const headers= new HttpHeaders({
  	 	'Authorization':'Bearer BQBZz4OwEecA2DjF48FQ7rsrihyLkgA2KDvGOz4yogEPr29gxe_aZDyqFJZ1OR1S4NQuJp8UCuJSBpYirvA'
  	 });
     return this.http.get("https://api.spotify.com/v1/browse/new-releases",{headers});
     }
}
