import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AspelComponent } from './components/aspel/aspel.component';
import { AdnBComponent } from './components/adn-b/adn-b.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'adn' },
  {
    path: 'adn',
    component:AdnBComponent,
   
  },
  {
    path: 'inicio',
    component:InicioComponent,
   
  },
  {
    path: 'aspel',
    component:AspelComponent,
   
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
