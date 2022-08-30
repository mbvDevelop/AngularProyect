import { Component, OnInit } from '@angular/core';
 import { PokedexResponse, Pokemon } from 'src/app/core/services/pokemons/models/pokemons.models';
 import { PokemonsService } from 'src/app/core/services/pokemons/pokemons.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './listPokemons.component.html',
  styleUrls: ['./listPokemons.component.css']
})

export class ListPokemonsComponent implements OnInit {
  pokemonName ='';
  pokemons?: Array<Pokemon>;
  constructor(private pokemonService: PokemonsService, private router: Router){}

  ngOnInit(): void {
    this.getAll()
  }

  getAll(){
    this.pokemonService.get().subscribe((resp: PokedexResponse) => {
      this.pokemons = resp.results;
      console.log(this.pokemons)
    });
  }

  search(query?: string){
    console.log("searching pokemon...")
    if(query){
        this.pokemonName = query
      this.pokemonService.search(query).subscribe((resp: PokedexResponse) => {
        this.pokemons = resp.results;
      });
    }else if (query === ""){
      this.getAll()
    } else {
      this.pokemonService.search(this.pokemonName).subscribe((resp: PokedexResponse) => {
        this.pokemons = resp.results;
      });
    }

  }

  openDetail(pokeName: string){
    this.router.navigate(['detail'],  { queryParams: { name: pokeName } })
  }
}
