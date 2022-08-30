import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { DetailRoutingModule } from './detail-routing.module';



@NgModule({
  declarations: [
    DetailPokemonComponent
  ],
  imports: [
    CommonModule,
    DetailRoutingModule

  ]
})
export class DetailModule { }
