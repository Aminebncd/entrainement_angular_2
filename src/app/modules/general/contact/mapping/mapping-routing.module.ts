import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MappingComponent } from './mapping.component';


const routes: Routes = [
  { path: '', component: MappingComponent, children: [] }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MappingRoutingModule { }
