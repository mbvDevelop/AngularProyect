import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
    import('./pages/home/homePage.module').then(m => m.HomePageModule)
  },
  {
    path:'detail',
    loadChildren: () =>
    import('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path:'list',
    loadChildren:() =>
    import('./pages/List/listPokemons.module').then(m => m.ListPokemons)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
