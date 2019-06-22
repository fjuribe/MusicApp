 import { Injectable } from '@angular/core';
 import { HttpClient,HttpHeaders} from '@angular/common/http';
 import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
       console.log("spotify service listo");
  }


  getNewReleases(){
  	const headers= new HttpHeaders({
            'Authorization':'Bearer BQDbA5BSjh5rEcPpZemEQ8bDVS7RKyF5OA1dbBpe-fjmMxjzaauZFkRRVNvPE0Rf-HenbyDdUDis-2H2vJY'
  	});


  	 return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers})
  	     // .subscribe(data=>{
  	     // 	console.log(data);
  	     // });
         .pipe(map(data=>{
              return data['albums'].items;
         }));
  }

  getArtista(termino:string){
    const headers= new HttpHeaders({
      'Authorization':'Bearer BQDbA5BSjh5rEcPpZemEQ8bDVS7RKyF5OA1dbBpe-fjmMxjzaauZFkRRVNvPE0Rf-HenbyDdUDis-2H2vJY'
    });


    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`,{headers});
  }
}
