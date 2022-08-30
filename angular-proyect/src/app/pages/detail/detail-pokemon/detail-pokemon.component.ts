import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { PokedexResponse, Pokemon } from 'src/app/core/services/pokemons/models/pokemons.models';
import { PokemonsService } from 'src/app/core/services/pokemons/pokemons.service';
@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {
  name?: string
  pokemon?:Pokemon
  constructor(private route: ActivatedRoute, private pokeService: PokemonsService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      if(this.name){
        this.pokeService.search(this.name).subscribe((pokemons: PokedexResponse) => {
          this.pokemon=pokemons.results[0]
        })
      }
    });
  }

}
