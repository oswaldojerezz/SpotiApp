import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class SpotifyService {

  constructor( private http: HttpClient ) {


  }

  getQuery( query: string ) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBrx9qtPLzwizV7TVhjq78g8iVo7860qTIrGgzjMc-2pDOp4QWPr1nH9jvkOCzsW2F0yvwGiZPM7kjJOk0'
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data => data['albums'].items));

  }

  getArtistas(termino: string) {

    return this.getQuery('search?q=' + termino + '&type=artist&limit=15')
    .pipe( map( data => data['artists'].items));
  }

  getArtista(id: string) {

    return this.getQuery(`artists/${id}`);
    // .pipe( map( data => data['artists'].items));
  }

  getTopT(id: string) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks']));
  }

}
