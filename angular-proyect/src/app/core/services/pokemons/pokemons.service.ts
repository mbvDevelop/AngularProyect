import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PokedexResponse, Pokemon } from './models/pokemons.models';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private http:HttpClient) { }
  get(){
    return this.http.get<PokedexResponse>(`${environment.url_api}${environment.pokemons}`);}
  search(query: String){return this.http.get<PokedexResponse>(`${environment.url_api}${environment.pokemons}?pokemon=${query}`);}
}
