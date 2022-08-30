import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../../core/services/pokemons/pokemons.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private pokemonService: PokemonsService) { }

  ngOnInit(): void {
  }

}
