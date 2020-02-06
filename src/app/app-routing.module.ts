import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsusComponent } from './asus/asus.component';


const routes: Routes = [
  {path: 'asus', component: AsusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
