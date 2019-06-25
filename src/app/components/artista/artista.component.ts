import { Component } from '@angular/core';
import{ActivatedRoute}  from "@angular/router";
import { SpotifyService } from '../../services/spotify.service'
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {
  artista : any = {};
  TopT  : any[] = [];
  loadingArtist: boolean;
  constructor(private router: ActivatedRoute,
              private spotify: SpotifyService
  ) {
    this.loadingArtist=true;
    this.router.params.subscribe(params =>{
      this.getArtista(params['id']);
      this.getTopT(params['id']);
    })


   }
getArtista( id : string){
this.loadingArtist=true;
 this.spotify.getArtista( id )
      .subscribe( artista => {
        console.log(artista);
        this.artista=artista;
        this.loadingArtist=false;
      })
}

getTopT( id : string){
 this.spotify.getTopT( id )
      .subscribe( TopT => {
        console.log(TopT);
        this.TopT=TopT;
      })
}
}
