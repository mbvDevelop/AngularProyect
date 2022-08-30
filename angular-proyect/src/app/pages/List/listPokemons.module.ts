import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListRoutingModule } from './listPokemons-routing.module';
import { ListPokemonsComponent } from './ListPokemon/listPokemons.component';


@NgModule({
  declarations: [
    ListPokemonsComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule

  ]
})
export class ListPokemons {}
