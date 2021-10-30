import { UniversitiesComponent } from './universities.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'india',pathMatch:'full'},
  {path:'india',component:UniversitiesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversitiesRoutingModule { }
