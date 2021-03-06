import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponentComponent} from './Components/home-component/home-component.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path: '**', component: HomeComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
